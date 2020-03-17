import ReactGA from 'react-ga';

class Category {

  path = [];

  constructor(name, sources) {
    this.name = name;
    this.path = [this.name];

    sources.forEach(({ source, actions }) => {
      let key;

      if (source) {
        key = `_${source}`;

        this[key] = {};

        Object.defineProperty(this, source, {
          get: () => {
            this.path.push(source);
            return this[key];
          }
        });
      }

      actions.forEach(action => {
        Object.defineProperty(key ? this[key] : this, action, {
          get: () => {
            this.path.push(action);
            return this;
          }
        });
      });
    })
  }

  track = label => {
    const { path } = this;

    ReactGA.event({
      category: path[0],
      action: path.join(':'),
      label: path.concat(label !== 'undefined' ? label : []).join(':')
    });

    this.path = [this.name];
  }

};

export const Section = new Category('Section', [
  { source: 'App', actions: ['Click'] },
  { source: 'Navigation', actions: ['Click'] },
  { source: 'Header', actions: ['Impression', 'Click'] },
  { source: 'Page', actions: ['Impression', 'Click'] },
  { source: 'Detail', actions: ['Impression', 'Link'] }
]);

export const Form = new Category('Form', [
  { source: 'Page', actions: ['Impression', 'Submission', 'Success', 'Failure'] },
  { source: 'Detail', actions: ['Submission', 'Success', 'Failure'] }
]);

export const Confirmation = new Category('Confirmation', [
  { source: 'Page', actions: ['Impression', 'Booking', 'Share', 'Reset'] },
  { source: 'Detail', actions: ['Impression', 'Booking', 'Share', 'Reset'] }
]);
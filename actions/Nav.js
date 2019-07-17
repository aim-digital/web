const LOAD = '@aim-digital/web/Nav/LOAD';
const LOAD_SUCCESS = '@aim-digital/web/Nav/LOAD_SUCCESS';
const LOAD_FAIL = '@aim-digital/web/Nav/LOAD_FAIL';

const DISMISS = '@aim-digital/web/Nav/DISMISS';
const DISMISS_SUCCESS = '@aim-digital/web/Nav/DISMISS_SUCCESS';
const DISMISS_FAIL = '@aim-digital/web/Nav/DISMISS_FAIL';

const TOGGLE_CLASS = 'nav-open';

const close = () => {
  const body = document.body;
  const app = document.getElementById('app');
  const items = document.querySelectorAll('.nav nav ul > li');

  app.classList.remove(TOGGLE_CLASS, app.classList.contains(TOGGLE_CLASS));
  body.classList.remove(TOGGLE_CLASS, body.classList.contains(TOGGLE_CLASS));
  items.forEach(item => item.classList.remove('active'));
};

export function load(breakpoint) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: () => new Promise(resolve => {
      const body = document.body;
      const app = document.getElementById('app');
      const items = document.querySelectorAll('.nav nav ul > li');
      const links = document.querySelectorAll('.nav nav ul a');

      links.forEach(link => link.addEventListener('click', () => {
        const item = link.parentNode;
        const isActive = item.classList.contains('active');

        // Remove active state for all items
        items.forEach(item => item.classList.remove('active'));

        if (item.querySelectorAll('ul').length) {
          // If item has a subnav, set nav `active` class
          app.classList.add(TOGGLE_CLASS);
          body.classList.add(TOGGLE_CLASS);
          item.classList[isActive ? 'remove' : 'add']('active');

          if (isActive && window.innerWidth > (breakpoint || 768)) {
            body.classList.remove(TOGGLE_CLASS);
            app.classList.remove(TOGGLE_CLASS);
          }
        } else {
          // If item has no subnav, unset nav `active` class
          app.classList.remove(TOGGLE_CLASS);
          body.classList.remove(TOGGLE_CLASS);
          item.classList.remove('active');
        }
      }));

      // Bind click event for toggle ("hamburger") button to toggle nav active state
      document.querySelector('.nav .toggle').addEventListener('click', e => {
        e.preventDefault();
        body.classList.toggle(TOGGLE_CLASS);
        app.classList.toggle(TOGGLE_CLASS);
        items.forEach(item => item.classList.remove('active'));
      });

      // Bind click event on mask to exit nav active state
      document.querySelector('.nav .logo').addEventListener('click', close);
      // document.querySelector('#app > div > .page').addEventListener('click', close);

      resolve({ loaded: true });
    })
  };
}

export function dismiss() {
  return {
    types: [DISMISS, DISMISS_SUCCESS, DISMISS_FAIL],
    promise: () => new Promise(resolve => {
      close();
      resolve();
    })
  };
}

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return Object.assign(state, action.result);
    case LOAD_FAIL:
      return typeof action.error === 'string' ? {
        ...state,
        error: action.error
      } : state;
    default:
      return state;
  }
};

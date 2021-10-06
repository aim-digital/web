import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Header} from '@fox-zero/web/components/layout';
import marked from 'marked';

const RE_SHORT_TITLE = [/\s(.*)?(\s)/, ' $1<br />'];
const RE_LONG_TITLE = [/(\w*)\s\.*/, '$1<br />'];

@connect(state => ({ content: state['@boilerplatejs/strapi'].Entry.content }))
export default class extends Header {
  static propTypes = {
    content: PropTypes.object
  };

  scrollTo = () => {
    const app = document.querySelector('#app');
    const top = app.querySelector('.section-0').getBoundingClientRect().top + window.scrollY;

    if (app.scrollTo) {
      app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      global.scrollTo({ top, left: 0, behavior: 'smooth' });
    } else {
      app.scrollTop = 0;
      window.scroll(top, 0);
    }
  };

  render() {
    const { content: { media, title, dek, summary, slug } } = this.props;
    const [regex, replace] = title.length >= 20 ? RE_LONG_TITLE : RE_SHORT_TITLE;

    return (
      <Header timer={0}
        runOnMount={__CLIENT__}
        images={media.map(file => file.url)}>
        <div className="content" >
          <h1>{dek}</h1>
          <h2 className={`${['design', 'development', 'support', 'packages', 'squad'].indexOf(slug) >= 0 ? 'squad-header': ''}`} dangerouslySetInnerHTML={{ __html: marked(title.replace(regex, replace)) }} />
          <section className="preview">
            <p>{summary}</p>
          </section>
          <div className="flippers">
            <div className="scroll">
              <button onClick={this.scrollTo}><span/></button>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Section} from '@machete-platform/core-bundle/components/layout';

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Section {
  static propTypes = {
    post: PropTypes.object
  };

  videos = 0;

  renderContent = () => {
    return this.props.post.content.map((content, i) => {
      return (<div key={i} className={content.type ? `${content.type} media` : 'paragraph'}>
        {content.body && <p>{content.body}</p>}
        {content.type === 'image' && <img width="100%" src={content.url || content.file.url} />}
        {content.type === 'video' && (<video id={`video-${(this.videos++)}`} className="video-js" width="100%" controls preload="auto">
          <source src={content.url || content.file.url} type="video/mp4" />
        </video>)}
      </div>)
    });
  };

  componentWillMount() {
    if(global.document) {
      var link = document.createElement("link");
      link.href = 'http://vjs.zencdn.net/6.8.0/video-js.css';
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";
      document.getElementsByTagName("head")[0].appendChild(link);

      var script = document.createElement("script");
      script.src = 'http://vjs.zencdn.net/6.8.0/video.js';
      script.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }

  componentDidMount() {
    const check = setInterval(() => {
      if(global.videojs) {
        clearInterval(check);

        for(let i = 0; i < this.videos; i++) {
          global.videojs(`video-${i}`);
        }
      }
    }, 1000);
  }

  render() {
    const {post} = this.props;

    return (
      <Section className={`post`}>
        <h1>{post.title}</h1>
        <h2>{post.tagline}</h2>
        <p className="humility">{post.summary}</p>
        <article>
          {this.renderContent()}
        </article>
      </Section>
    );
  }
}

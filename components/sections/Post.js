import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {ShareButtons} from 'react-share';
import {Section} from '@machete-platform/core-bundle/components/layout';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Section {
  static propTypes = {
    post: PropTypes.object
  };

  videos = 0;

  renderContent = () => {
    return this.props.post.content.map((content, i) => {
      return (<div key={i} className={`${content.type} ${content.type === 'image' || content.type === 'video' ? 'media' : 'text'}`}>
        {content.type === 'heading' && <h3>{content.body}</h3>}
        {content.type === 'paragraph' && <p>{content.body}</p>}
        {content.type === 'quote' && <blockquote data-credit={content.credit}><p><span>{content.body}</span></p></blockquote>}
        {content.type === 'image' && (<span>
          <span className="type">Photo</span>
          <img width="100%" src={content.url || content.file.url} />
          {content.caption && <p className="caption"><span>{content.caption}</span></p>}
          {content.credit && <span className="credit">{content.credit}</span>}
        </span>)}
        {content.type === 'video' && (<span>
          <span className="type">Video</span>
          <video id={`video-${(this.videos++)}`} className="video-js" width="100%" controls preload="auto">
            <source src={content.url || content.file.url} type="video/mp4" />
          </video>
          {content.caption && <p className="caption"><span>{content.caption}</span></p>}
          {content.credit && <span className="credit">{content.credit}</span>}
        </span>)}
      </div>)
    });
  };

  renderShare() {
    const { post } = this.props;
    const { id, slug } = post;
    const url = `http://vitruvian.tech/post/${slug}/${id}`;

    return (<div className="share">
      <FacebookShareButton url={`${url}`}>
        <img src="/@vitruvian-tech/machete-bundle/images/facebook.png" />
      </FacebookShareButton>
      <TwitterShareButton url={`${url}`}>
        <img src="/@vitruvian-tech/machete-bundle/images/twitter.png" />
      </TwitterShareButton>
      <EmailShareButton url={`${url}`} subject={`\<VitruvianTech\> ${post.title}`} body={post.summary}>
        <img src="/@vitruvian-tech/machete-bundle/images/email.png" />
      </EmailShareButton>
    </div>);
  }

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
    const { post } = this.props;

    return (
      <Section className={`post`}>
        <h1>{post.title}</h1>
        <h2>{post.tagline}</h2>
        <p className="summary">{post.summary}</p>
        {this.renderShare()}
        <br />
        <article>
          {this.renderContent()}
        </article>
        {this.renderShare()}
        <p className="text-center humility">
          <small>© 2018 Vitruvian Technology, Corp.</small>
        </p>
        <br />
      </Section>
    );
  }
}

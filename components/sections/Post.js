import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {ShareButtons} from 'react-share';
import {Section} from '@machete-platform/core-bundle/components/layout';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

const RE_ANCHOR_MARKDOWN = /\[([^\]]*)\]\(([^\s|\)]*)(?:\s"([^\)]*)")?\)/g;

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
        {content.type === 'paragraph' && <p dangerouslySetInnerHTML={{__html: content.body.replace(RE_ANCHOR_MARKDOWN, '<a href="$2" title="$3" target="_blank">$1</a>')}} />}
        {content.type === 'quote' && <blockquote data-credit={content.credit}><p><span>{content.body}</span></p></blockquote>}
        {content.type === 'image' && (<span>
          <span className="type">Look</span>
          <img width="100%" src={content.url || content.file.url} />
          {content.credit && <span className="credit">{content.credit}</span>}
          {content.caption && <p className="caption"><span>{content.caption}</span></p>}
        </span>)}
        {content.type === 'video' && (<span>
          <span className="type">Watch</span>
          <video id={`video-${(this.videos++)}`} className="video-js" width="100%" controls preload="auto">
            <source src={content.url || content.file.url} type="video/mp4" />
          </video>
          {content.credit && <span className="credit">{content.credit}</span>}
          {content.caption && <p className="caption"><span>{content.caption}</span></p>}
        </span>)}
      </div>)
    });
  };

  renderShare() {
    const { post } = this.props;
    const { id, slug } = post;
    const url = `https://vitruvian.tech/post/${slug}/${id}`;

    return (<div className="share">
      <FacebookShareButton url={`${url}`}>
        <img src="/@vitruvian-tech/machete-bundle/images/facebook.png" />
      </FacebookShareButton>
      <TwitterShareButton url={`${url}`}>
        <img src="/@vitruvian-tech/machete-bundle/images/twitter.png" />
      </TwitterShareButton>
      <EmailShareButton url={`${url}`} subject={`\<VitruvianTech\> ${post.title}`} body={`${post.summary}\n\n${url}`}>
        <img src="/@vitruvian-tech/machete-bundle/images/email.png" />
      </EmailShareButton>
    </div>);
  }

  componentWillMount() {
    if(global.document) {
      var link = document.createElement("link");
      link.href = 'https://vjs.zencdn.net/6.8.0/video-js.css';
      link.type = "text/css";
      link.rel = "stylesheet";
      link.media = "screen,print";
      document.getElementsByTagName("head")[0].appendChild(link);

      var script = document.createElement("script");
      script.src = 'https://vjs.zencdn.net/6.8.0/video.js';
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
//dangerouslySetInnerHTML
    return (
      <Section className={`post`}>
        <h1>{post.title}</h1>
        <h2>{post.tagline}</h2>
        <p className="summary" dangerouslySetInnerHTML={{__html: post.summary.replace(RE_ANCHOR_MARKDOWN, '<a href="$2" title="$3" target="_blank">$1</a>')}} />
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

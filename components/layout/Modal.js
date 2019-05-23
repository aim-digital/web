import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Modal from 'react-bootstrap-modal';
import {Logo} from '@vitruviantech/web/components/layout';
import {ShareButtons} from 'react-share';
import _ from 'lodash';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

export default class extends Component {
  static propTypes = {
    onHide: PropTypes.func,
    children: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    share: PropTypes.object
  };

  static defaultProps = {
    onHide: () => {},
    className: '',
    share: {}
  };

  render() {
    const { children, title, icon, className, share: { url, message, caption } } = this.props;

    return (
      <Modal {..._.omit(this.props, ['share'])} className={`${className}`} title="">
        <div className="modal-nav">
          <Modal.Dismiss className="dismiss">
            <i className="fa fa-arrow-circle-left"></i>
          </Modal.Dismiss>
          {url && <div className="share">
            <FacebookShareButton url={url} quote={caption}>
              <i className="fa fa-facebook-official"/>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={caption}>
              <i className="fa fa-twitter"/>
            </TwitterShareButton>
            <EmailShareButton url={url} subject={`\<VitruvianTech\> ${caption}`} body={`${message}\n\n${url}\n\n`}>
              <i className="fa fa-envelope"/>
            </EmailShareButton>
          </div>}
        </div>
        <Modal.Header>
          <Logo/>
          <Modal.Title>{icon && <div><i className={`fa fa-${icon}`}></i></div>}<span>{title}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <span>© 2018 Vitruvian Technology, Corp. (subsidiary of Vitruvian Holdings, LLC.)</span>
        </Modal.Footer>
      </Modal>
    );
  }
}
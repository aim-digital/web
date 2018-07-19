import React, {Component, PropTypes} from 'react';
import Modal from 'react-bootstrap-modal';
import {Logo} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Component {
  static propTypes = {
    onHide: PropTypes.func,
    children: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    onHide: () => {},
    className: ''
  };

  render() {
    const { children, title, className } = this.props;

    return (
      <Modal {...this.props} className={`${className}`}>
        <div className="modal-nav">
          <Modal.Dismiss className="dismiss">
            <i className="fa fa-arrow-circle-left"></i>
          </Modal.Dismiss>
        </div>
        <Modal.Header>
          <Logo/>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <span>© 2018 Vitruvian Technology, Corp. (subsidiary of Vitruvian Holdings, LLC.)</span>
        </Modal.Footer>
      </Modal>
    );
  }
}
import React, {Component, PropTypes} from 'react';
import Modal from 'react-bootstrap-modal';

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
      <Modal {...this.props} aria-labelledby="modal-title" className={`${className}`}>
        <Modal.Header>
          <Modal.Dismiss className="close"/>
          <div className="brand">
            <div className="name">
              <span>VitruvianTech</span>
            </div>
            <div className="tagline">
              <span className="color-primary-blue">Roman</span>&nbsp;
              <span className="color-primary-green">Inspired</span>&nbsp;
              <span className="color-primary-yellow">Software</span>&nbsp;
              <span className="color-secondary-red">Designers</span>
            </div>
          </div>
          <Modal.Title id="modal-title">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <span>© 2018 Vitruvian Technology, Corp. (subsidiary of Vitruvian Holdings, LLC.)</span>
        </Modal.Footer>
      </Modal>
    );
  }
}
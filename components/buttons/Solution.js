import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class extends Component {
  static propTypes = {
    children: PropTypes.string,
    icon: PropTypes.string,
    transition: PropTypes.object,
    onClick: PropTypes.func
  };

  static defaultProps = {
    icon: 'info-circle',
    onClick: () => {}
  };

  state = {
    style: {}
  };

  componentWillMount() {
    const { transition } = this.props;
    transition && this.setState({ style: transition.from });
  }

  componentDidMount() {
    const { transition } = this.props;
    transition && setTimeout(() => this.setState({ style: transition.to }), transition.delay);
  }

  render() {
    const { icon, onClick } = this.props;
    const { style } = this.state;

    return (
      <div className="solution" style={style} onClick={onClick}>
        {icon && <i className={`fa fa-${icon}`}></i>}
        <button>
          {this.props.children}
        </button>
      </div>
    );
  }
}

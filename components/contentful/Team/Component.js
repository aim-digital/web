import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Member} from '@vitruviantech/web/components/contentful';
import Slider from 'nuka-carousel';

@connect(state => ({team: state['@boilerplatejs/contentful'].Entry.data}))

export default class extends Component {
  static propTypes = {
    team: PropTypes.array,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {team, className} = this.props;
    return (
      <Slider className={className}>
        {team && team.length && (
          team.map((member) => <Member {...member} key={member.name}/>)
        )}
      </Slider>
    );
  }
}

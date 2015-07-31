import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'redux/react';

import * as HomeActions from './../actions/home-actions';

import GeneratedImage from './../components/generated-image/generated-image';

export default class Home extends Component {

  componentDidMount() {
    addEventListener('resize', () => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <GeneratedImage src={`/img/logo-shape.png`} width={innerWidth} height={innerHeight} />
    );
  }
}
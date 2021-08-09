import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../../utils/functions';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}

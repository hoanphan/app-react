/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import  App from './components/App'
export default class app extends Component {
  render() {
    return <App/>;
  }
}

AppRegistry.registerComponent('app', () => app);

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './Login'
import Welcome from './Welcome'
import Register from './Register'
import Temporary from './Temporary'
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';

const stack = createStackNavigator({
  Page1Screen:{screen:Welcome,navigationOptions: {
  title: 'Welcome',header:null}},
  Page2Screen:{screen:Register,navigationOptions: {
  title: 'Register',header:null}},
  Page3Screen:{screen:Login,navigationOptions: {
  title: 'Login',header:null}},
  Page4Screen:{screen:Temporary,navigationOptions: {
  title: 'Temporary',header:null}}
});

export default createAppContainer(stack);

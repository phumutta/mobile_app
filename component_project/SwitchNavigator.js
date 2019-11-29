import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './Login'
import Temporary from './Temporary'
import { createSwitchNavigator,createAppContainer} from 'react-navigation'

const navigator = createSwitchNavigator({
    LoginScreen:{screen:Login,navigationOptions: {
    title: 'Login'}},
    TemporaryScreen:{screen:Temporary,navigationOptions: {
    title: 'Menu'}},
  });

export default createAppContainer(navigator);

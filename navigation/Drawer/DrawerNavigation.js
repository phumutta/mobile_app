
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';


const stackPage1 = createStackNavigator({
Page1Screen:{screen:Page1,navigationOptions: {
title: 'Page1',}},
});

const stackPage2 = createStackNavigator({
Page2Screen:{screen:Page2,navigationOptions: {
title: 'Page2'}},
});

const stackPage3 = createStackNavigator({
Page3Screen:{screen:Page3,navigationOptions: {
header: null}},
});



const navigator = createDrawerNavigator({
  drawerPage1:{screen:stackPage1},
  drawerPage2:{screen:stackPage2},
  drawerPage3:{screen:stackPage3},

});

export default createAppContainer(navigator);

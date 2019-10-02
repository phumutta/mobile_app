import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NickName from './NickName'
import Img from './Img'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:NickName,navigationOptions: {
  title: 'NickName', header:null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Img,navigationOptions: {
  title: 'Img',header:null}},
});


const navigator = createMaterialTopTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'NickName'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'Img'}},
  });


export default createAppContainer(navigator);

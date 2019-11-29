import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import Page6 from './Page6'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  header:null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  header:null}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
  header:null}},
});

const stackPage4 = createStackNavigator({
  Page4Screen:{screen:Page4,navigationOptions: {
  header:null}},
});

const stackPage5 = createStackNavigator({
  Page5Screen:{screen:Page5,navigationOptions: {
  header:null}},
});

const stackPage6 = createStackNavigator({
  Page6Screen:{screen:Page6,navigationOptions: {
  header:null}},
});




const navigator = createDrawerNavigator({
    Register:{screen:stackPage1,navigationOptions: {
    header:null}},
    Login:{screen:stackPage2,navigationOptions: {
    header:null}},
    Upload:{screen:stackPage3,navigationOptions: {
    header:null}},
    Job1:{screen:stackPage4,navigationOptions: {
    header:null}},
    Job2:{screen:stackPage5,navigationOptions: {
    header:null}},
    Job3:{screen:stackPage6,navigationOptions: {
    header:null}},
  })


export default createAppContainer(navigator);

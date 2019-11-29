import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Party1 from './Party1'
import Page1 from './Page1'
import Page3 from './Page3'
import Temporary2 from './Temporary2'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'BMI', header:null}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Temporary2,navigationOptions: {
  title: 'ELECTIONS',header:null}},
});
const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
  title: 'ACCOUNT',header:null}},
});



const navigator = createMaterialTopTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'BMI'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'ELECTIONS'}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'ACCOUNT'}},

  },{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName == 'buttomPage1') {
          iconName = 'man';
          return <Entypo name={iconName} size={25} color={tintColor} />;
        }
        else if(routeName == 'buttomPage2'){
          iconName = 'vote-outline';
          return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
        }
        else if(routeName == 'buttomPage3'){
          iconName = 'account-circle';
          return <MaterialIcons name={iconName} size={25} color={tintColor} />;
        }

      },
    }),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',
      showIcon:true

    }



});


export default createAppContainer(navigator);

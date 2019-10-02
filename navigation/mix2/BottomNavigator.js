import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StudentID from './StudentID'
import FirstName from './FirstName'
import Temporary2 from './Temporary2'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:StudentID,navigationOptions: {
  title: 'StudentID'}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:FirstName,navigationOptions: {
  title: 'FirstName'}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Temporary2,navigationOptions: {
    header:null}},
});

const navigator = createBottomTabNavigator({
    StudentID:{screen:stackPage1,navigationOptions: {
    title: 'StudentID'}},
    FirstName:{screen:stackPage2,navigationOptions: {
    title: 'FirstName'}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'etc'}},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'buttomPage1') {
          iconName = 'ios-star';
        } else if (routeName == 'ChatTab') {
          iconName = 'ios-chatbubbles';
        }
        else if(routeName == 'buttomPage2'){
          iconName = 'ios-person';
        }
        else if(routeName == 'buttomPage3'){
          iconName = 'ios-aperture';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor:'#000 000 00',
      labelStyle:{fontSize:15},
      tabStyle:{backgroundColor:'gray',opacity:.8}
    }

})


export default createAppContainer(navigator);

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Party from './Party'
import Result from './Result'
import Party1 from './Party1'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Party1,navigationOptions: {
  header : null
  }},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Party,navigationOptions: {
  header:null
  }},
});
const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Result,navigationOptions: {
  header:null,
  }},
});

const navigator = createBottomTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'VOTE',header:null}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'PARTY',header:null}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'RESULTS',header:null}},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'buttomPage1') {
          iconName = 'vote-outline';
          return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;

        } else if (routeName == 'buttomPage2') {
          iconName = 'hexagon-outline';
            return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
        }
        else if(routeName == 'buttomPage3'){
          iconName = 'ios-paper';
            return <Ionicons name={iconName} size={25} color={tintColor} />;
        }

      },
    }),

    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'white',

      activeBackgroundColor:'#1C92D2',
      labelStyle:{fontSize:15},
      tabStyle:{backgroundColor:'#1C92D2',opacity:.8}
    }

})


export default createAppContainer(navigator);

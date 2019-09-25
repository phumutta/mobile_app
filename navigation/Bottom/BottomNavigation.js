import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Page1,navigationOptions: {
  title: 'Page1'}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Page2,navigationOptions: {
  title: 'Page2'}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Page3,navigationOptions: {
  title: 'Page3'}},
});

const navigator = createBottomTabNavigator({
    buttomPage1:{screen:stackPage1,navigationOptions: {
    title: 'Page1'}},
    buttomPage2:{screen:stackPage2,navigationOptions: {
    title: 'Page2'}},
    buttomPage3:{screen:stackPage3,navigationOptions: {
    title: 'Page3'}},
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './Stack/StackNavigation.js';
import SwitchNavigation from './Switch/SwitchNavigation';
import DrawerNavigation from './Drawer/DrawerNavigation';
import BottomNavigation   from './Bottom/BottomNavigation';
export default class App extends React.Component {
  render(){
    return (
      <View style={{flex:1}}>


      <BottomNavigation/>
      </View>
      //  ^^
      //  || <StackNavigation/> <SwitchNavigation/><DrawerNavigation/> <BottomNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

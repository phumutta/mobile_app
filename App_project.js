import * as React from 'react';
import { Text, View, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import StackNavigation from './components/StackNavigation'



export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:StatusBar.currentHeight}}>
          <StackNavigation/>
        </View>
    );
  }
}

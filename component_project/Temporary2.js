import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopNavigator from './TopNavigator'
import BottomNavigator from './BottomNavigator'

export default class Temporary2 extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:10}}>
          <BottomNavigator/>
        </View>
    );
  }
}

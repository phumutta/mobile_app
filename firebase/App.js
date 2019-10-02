import React from 'react';
import { StyleSheet, Text, View,StatusBar} from 'react-native';
import TopNavigator from './components/TopNavigator'
//npm install --save firebase
export default class App extends React.Component {
  render()
  {
    return (
      <View style={{flex:1}}>


      <TopNavigator/>
      </View>

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

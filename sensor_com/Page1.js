import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import { Accelerometer } from 'expo-sensors';

class Page1 extends React.Component {

  state = {
    accelerometerData: {},
  };

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
      console.log("unsubscribe");
    } else {
      this._subscribe();
      console.log("subscribe");
    }
  };

  _slow = () => {

  };

  _fast = () => {

  };

  _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      this.setState({ accelerometerData });
    });

  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;

  };

  onPressToggle = () => {
    this._toggle()
  };

  onPressSlow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  onPressFast = () => {
    
    Accelerometer.setUpdateInterval(16);
  };

  render() {
    let { x, y, z } = this.state.accelerometerData;

    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
          <Text style={styles.text}>{round(x)}</Text>
          <Text style={styles.text}>{round(y)}</Text>
          <Text style={styles.text}>{round(z)}</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <TouchableOpacity
                  style={styles.touchableUser}
                  onPress={this.onPressToggle}>
                  <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Toggle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.touchableUser}
                  onPress={this.onPressFast}>
                  <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Fast</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.touchableUser}
                  onPress={this.onPressSlow}>
                  <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Slow</Text>
              </TouchableOpacity>

          </View>
      </View>
      </LinearGradient>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
};

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  text: {
      textAlign: 'center',
      textAlignVertical: "center",
      height:120,
      width:120,
      backgroundColor: 'transparent',
      padding: 10,
      margin:15,
      borderRadius: 75,
      borderColor:'white',
      borderWidth : 1,
      fontSize:30,
  },
  touchableUser:{
    height:50,
    width:100,
    textAlignVertical: "center",
    alignItems: 'center',
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
});

export default Page1;

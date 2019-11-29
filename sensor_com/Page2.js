import React from 'react';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,Slider
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import * as Brightness from 'expo-brightness';
import * as Permissions from 'expo-permissions';

class Page2 extends React.Component {

  state = {
    brightnessValue:0
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS);

    const { status } = await Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS);
    if (status === 'granted') {
      Brightness.setSystemBrightnessAsync(1);
    }

 };


  componentWillUnmount() {

  }


  onChangebrightnessValue = value => {
    this.setState({brightnessValue:value*100})
    Brightness.setSystemBrightnessAsync(value)

  };

  onChangeTextEmail = email => this.setState({email});

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center',alignItems:'stretch'}}>
        <Text style={styles.text}>{parseInt(this.state.brightnessValue)}</Text>
        <Slider onValueChange={this.onChangebrightnessValue} />
      </View>
      </LinearGradient>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  text: {
      textAlign: 'center',
      alignSelf:'center',
      textAlignVertical: "center",
      height:70,
      width:70,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 35,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  textInput: {
      alignItems: 'center',
      height:50,
      width:310,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },

});

export default Page2;

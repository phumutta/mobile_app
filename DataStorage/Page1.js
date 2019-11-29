import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,ScrollView,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight,AsyncStorage
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'


class Page1 extends React.Component {

  constructor(props) {
  super(props)

}

  state = {
    writeText:'',
    readText: '',
  };



  onChangeWriteText = writeText => this.setState({writeText});

  onPressWrite= async() => {
    await AsyncStorage.setItem('key1',this.state.writeText);
  };

  onPressRead=async()=>{
    const value = await AsyncStorage.getItem('key1');
    this.setState({readText:value});
  }


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <TextInput
          style={styles.nameInput}
          placeholder="Put your text"
          onChangeText={this.onChangeWriteText}
        />
        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressWrite}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Write</Text>
        </TouchableOpacity>

        <Text style={styles.nameInput}>{this.state.readText}</Text>
        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressRead}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Read</Text>
        </TouchableOpacity>


      </View>
      </LinearGradient>
    );
  }
}

const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
    marginTop:2,
  },
  touchablePassword:{
    alignItems: 'center',
    padding:5,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 5,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },

  buttonText: {
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:30,
      color:'#ffffff'
  },
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  },
  listArea: {
  backgroundColor: "transparent",
  flex: 1,
  paddingTop: 16
  },


});

export default Page1;

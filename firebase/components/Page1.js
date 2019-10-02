import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import database from './database';

import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert
} from 'react-native';




import { LinearGradient } from 'expo-linear-gradient'

class Login extends React.Component {

  state = {
    firstName: '',
    lastName: '',
  };

  onPressAddAccount =  async () => {
    account={
      FirstName:this.state.firstName,
      lastName:this.state.lastName,

    }

    //ใช้คู่กับ async
   await  database.createAccount(account,this.add_success,this.add_fail); //generate doc ให้
  //  database.createAccount2(account); // ระบุ doc
};
/*
async add_success(){
  เหมือนกับ add_success=async()=>{}
}*/
add_success=async(id)=>{
  console.log(id)

}
add_fail=async()=>{
  console.log("Fail")

}




  onChangeTextFirstName = firstName => this.setState({ firstName });
  onChangeTextLastName = lastName => this.setState({ lastName });

  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <View style={{flex:1,justifyContent: 'center'}}>


        <TextInput
          style={styles.nameInput}
          placeholder="First Name"
          onChangeText={this.onChangeTextFirstName}/>

        <TextInput
          style={styles.nameInput}
          placeholder="Last Name"
          onChangeText={this.onChangeTextLastName}
        />

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAddAccount}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Insert</Text>
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
    marginTop:20,
  },
  touchablePassword:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
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
  }
});

export default Login;

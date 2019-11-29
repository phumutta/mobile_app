import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import MessageListview from './MessageListview'


class HomeWork extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        name:'',
        message:'',
        item:[]
      };
  }

  onPressAddAccount = () => {
    account={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
    }

    //console.log(account);
    database.createAccount(account,this.add_Account_success,this.add_Account_fail);

  };

  onPressOK = () => {

    database.readMessageListening(this.read_Message_success,this.read_Message_fail);

  };

  onPressSend = () => {
    message={
      name:this.state.name,
      message:this.state.message,
      time:new Date(),
    }
    database.addMessage(message,this.add_Message_success,this.add_Message_fail)
  };

  read_Message_success=async(message)=>{
    isSender = false;
    if(this.state.name==message.name)
    {
        isSender = true;
    }

    this.setState({ item: this.state.item.concat([  {
        name: message.name,
        message:message.message,
        sender:isSender,
        image_url: 'https://i.imgur.com/jLFpaBY.png'
      }])
    });
  }

  read_Message_fail=async()=>{
    console.log("fail");
  }

  add_Message_fail=async()=>{
    console.log("fail");
  }

  add_Message_success=async(id)=>{
    console.log(id)
  }



  onChangeTextName = name => this.setState({ name });
  onChangeTextMessage = message => this.setState({ message });


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

      <View style={{flexDirection: 'row'}}>
         <TextInput
            style={styles.nameInput}
            placeholder="Name"
            onChangeText={this.onChangeTextName}/>
         <TouchableOpacity
            style={styles.touchableUser}
            onPress={this.onPressOK}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}> OK </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
         <TextInput
            style={styles.nameInput}
            placeholder="Message"
            onChangeText={this.onChangeTextMessage}/>
         <TouchableOpacity
            style={styles.touchableUser}
            onPress={this.onPressSend}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Send</Text>
        </TouchableOpacity>
      </View>

      <View style ={styles.list}>
        <MessageListview itemList={this.state.item}/>
      </View>

      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  list:{
    width:'98%',
    height:'70%',
    borderWidth : 1,
    borderColor:'white',
    borderRadius: 10,
    padding:10,
    margin:5,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      width:'80%',
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },

});

export default HomeWork;

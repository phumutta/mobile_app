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


class Page6 extends React.Component {

  constructor (props){
     super (props);
     this.state = {
       name: 'Name : ',
       email: 'Email : ',
       imageuri :'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',

     };

  }

  onFocusFunction = async() => {

    database.readOnce(this.props.navigation.state.params.userID,this.read_Account_success,this.read_Account_fail)
    Alert.alert(this.props.navigation.state.params.userID)
    console.log(this.props.navigation.state.params.userID);
  }

  async componentDidMount () {
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })
  }

  read_Account_success=async(account)=>{

    this.setState({name:account.firstName})
    this.setState({imageuri:account.img})
    this.setState({email:account.email})
  }

  read_Account_fail=async()=>{

  }


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
      <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <View style={{flexDirection: 'row'}}>

        <View style={{justifyContent:'center', width:150}}>
           <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:20}}>Profile Image</Text>
               <Image
                   style={styles.imgStyles}
                   source={{uri:this.state.imageuri}}/>
        </View>

        </View>

        <Text style={styles.text}>{this.state.name}</Text>
        <Text style={styles.text}>{this.state.email}</Text>

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
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  }


});

export default Page6;

import React from 'react';
import { Constants, ImagePicker, Permissions, } from 'expo';
import {
  StyleSheet, Text,ScrollView,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'
import Items1 from './Items1'
import * as SQLite from 'expo-sqlite';


class Page2 extends React.Component {

  constructor(props) {
  super(props)

}

  state = {
    text: '',
    items:null
  };



  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    database.putText(this.state.text,this.add_text_success,this.add_text_fail);
  };

  add_text_success=async(data)=>{
    Alert.alert(data.toString());
    database.getAllText(this.get_alltext_success,this.get_alltext_fail);

  }

  add_text_fail=async(error)=>{
      console.log(error);
  }

  get_alltext_success=async(arr)=>{
    this.setState({items:arr});
  }

  get_alltext_fail=async(error)=>{

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
          placeholder="What do you need to do ?"
          onChangeText={this.onChangeText}
        />
        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressAdd}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>Create</Text>
        </TouchableOpacity>

        <ScrollView style={styles.listArea}>
            {
              //ลักษณะif else
              this.state.items!=null?
              // map ข้อมูล ลง ใน item 1
              this.state.items.map(({id,done,value})=>(
              <Items1
              heading={"To do list"}
              id={id}
              done={done}
              value={value}/>
              )):null
            }


        </ScrollView>

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

export default Page2;

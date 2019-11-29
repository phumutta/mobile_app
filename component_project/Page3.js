import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import {AsyncStorage} from 'react-native';
import database from './Database'
export default class Page3 extends React.Component {




    state={
      name:'',
      email:'',
      phone:'',
    }

    onFocusFunction=async() =>{
      const value =await AsyncStorage.getItem('@email');
      this.setState({email:value})
      database.readdata(this.state.email,this.read_Account_success,this.read_Account_fail)
      console.log("test")
      console.log(this.state.email)
    }

    read_Account_success=async(doc)=>{
      this.setState({name:doc.name})
      this.setState({email:doc.email})
      this.setState({phone:doc.phone})
      console.log(this.state.name);
    }

    read_Account_fail=async()=>{
      console.log("error")


    }

    //เข้าหน้านี้ทำ functionนี้ตัวแรก
    componentDidMount(){

        this.onFocusFunction();
      }







  LOGOUT = () => {
    Alert.alert("Error developer cannot write this function")
  };










  render() {

    return (

      <LinearGradient
       colors={['#F2FCFE',  '#1C92D2']}
       style={{flex: 1}}>

       <View style={{marginTop:50,flexDirection: 'row'}}>
           <Text style={styles.txt}>
               NAME :
           </Text>
           <Text style={styles.txt}>  {this.state.name}</Text>

         </View>
         <View style={{marginTop:50,flexDirection: 'row'}}>
             <Text style={styles.txt}>
                 EMAIL :
             </Text>
             <Text style={styles.txt}>  {this.state.email}</Text>

           </View>
           <View style={{marginTop:50,flexDirection: 'row'}}>
               <Text style={styles.txt}>
                   PHONE :
               </Text>
               <Text style={styles.txt}>  {this.state.phone}</Text>

             </View>

             <TouchableOpacity
             style={styles.touchableUser}
             onPress={() => this.LOGOUT()}
             >


             <Text style={{fontSize:20, color:'#FFFFFF',textAlign:'center'}}> LOGOUT</Text>
           </TouchableOpacity>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:26,
      margin:5
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'black',
    borderWidth : 1,
    margin:5,
    marginTop:50,
    backgroundColor: '#000000'
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
      fontSize:15,
  },
  textInput: {
      alignItems: 'center',
      height:50,
      width: 200,
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
      width: 250,
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'black',
    borderWidth : 1,
    margin:5,
    marginTop:50,
    backgroundColor: '#000000'
  },

})

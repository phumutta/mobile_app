import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
export default class Page3 extends React.Component {


  render() {
    return (
      <LinearGradient
       colors={['#BBCBFF', '#FFFFFF']}
       style={{flex: 1}}>

       <View style={{marginTop:50,flexDirection: 'row'}}>
           <Text style={styles.txt}>
               NAME :
           </Text>
           <Text style={styles.txt}>  Thor</Text>

         </View>
         <View style={{marginTop:50,flexDirection: 'row'}}>
             <Text style={styles.txt}>
                 EMAIL :
             </Text>
             <Text style={styles.txt}>  Thor@gmail.com</Text>

           </View>
           <View style={{marginTop:50,flexDirection: 'row'}}>
               <Text style={styles.txt}>
                   PHONE :
               </Text>
               <Text style={styles.txt}>  0999999</Text>

             </View>
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

})

import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
export default class Page1 extends React.Component {



  render() {
    return (
      <LinearGradient
       colors={['#BBCBFF', '#FFFFFF']}
       style={{flex: 1}}>

      <View style={{justifyContent: 'center',marginTop:50}}>
          <Text  style={styles.txt}>
              BMI CALCULATOR
          </Text>
      </View>
      <View style={{marginTop:50,flexDirection: 'row'}}>
          <Text style={styles.txt}>
              ส่วนสูง
          </Text>
          <TextInput
            style={styles.nameInput}
            placeholder="height"
            onChangeText={this.onChangeTextEmail}
        />
        </View>
        <View style={{marginTop:50,flexDirection: 'row'}}>
            <Text style={styles.txt}>
                น้ำหนัก
            </Text>
            <TextInput
              style={styles.nameInput}
              placeholder="weight"
              onChangeText={this.onChangeTextEmail}
          />
          </View>
          <TouchableOpacity
          style={styles.touchableUser}>


          <Text style={{fontSize:20, color:'#FFFFFF',textAlign:'center'}}> CALCULATOR</Text>
        </TouchableOpacity>
        <View style={{marginTop:50,flexDirection: 'row'}}>
            <Text style={styles.txt}>
                จำนวนก้าวที่เดิน :
            </Text>
            <Text style={styles.txt}> 10</Text>

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
      fontSize:36,
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
      fontSize:20,
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

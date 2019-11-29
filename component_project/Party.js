import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,AppRegistry
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'


export default class Party extends React.Component {
  render(){
    return (
      <LinearGradient
       colors={['#F2FCFE',  '#1C92D2']}
       style={{flex: 1}}>
      <View style={{flex:2,marginTop:90,marginBottom:70,flexDirection:'column'}}>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img1}>
            <Image
              style={styles.img1}
              source={require('./power3.png')}/>

          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>01</Text>
          <Text style={styles.txt2}>พรรคพลังประชารัฐ</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img2}>
            <Image
              style={styles.img2}
              source={require('./future.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>02</Text>
          <Text style={styles.txt2}>พรรคอนาคตใหม่</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img3}>
            <Image
              style={styles.img3}
              source={require('./pt.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>03</Text>
          <Text style={styles.txt2}>พรรคเพื่อไทย</Text>
          </View>
        </View>
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  img1: {
    justifyContent:'flex-start',
    width: 140,
    height: 140,
    marginTop:10,
    marginLeft:20,
    borderWidth:0,
    margin:0,
  },
  img2: {
    justifyContent:'flex-start',
    width: 130,
    height: 130,
    marginTop:10,
    marginLeft:20,
    borderWidth:0,
    margin:0,
  },
  img3: {
    justifyContent:'flex-start',
    width: 150,
    height: 150,
    marginTop:10,
    marginLeft:20,
    borderWidth:0,
    margin:0,
  },
  txt: {
    fontSize:50,
    fontFamily:'Roboto',
    alignItems:'flex-end',
  },
  txt2: {
    fontSize:24,
    fontFamily:'Roboto',
    alignItems:'flex-end',
  }
})

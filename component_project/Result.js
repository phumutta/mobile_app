import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,AppRegistry
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'

export default class Result extends React.Component {
  state = {
    no1:0,
    no2:0,
    no3:0,
  }
  onPressOK = () => {
  database.readOnce(this.state.no1,this.read_Account_success,this.read_Account_fail)
  };

  read_Account_success=async(doc)=>{
    this.setState({no1:doc.power})
    this.setState({no2:doc.future})
    this.setState({no3:doc.pt})
    console.log(this.state.no1);
  }

  read_Account_fail=async()=>{



  }
  render(){
    return (
      <LinearGradient
       colors={['#F2FCFE',  '#1C92D2']}
       style={{flex: 1}}>
      <View style={{flex:2,marginTop:90,marginBottom:70,flexDirection:'column'}}>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img1}
          onPress={() => this.onPressOK()} >
            <Image
              style={styles.img1}
              source={require('./power3.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>{this.state.no1}</Text>
          <Text style={styles.txt2}>พรรคพลังประชารัฐ</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img2}
          onPress={() => this.onPressOK()}>
            <Image
              style={styles.img2}
            source={require('./future.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>{this.state.no2}</Text>
          <Text style={styles.txt2}>พรรคอนาคตใหม่</Text>
          </View>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style={styles.img3}
          onPress={() => this.onPressOK()}>
            <Image
              style={styles.img3}
              source={require('./pt.png')}/>
          </TouchableOpacity>
          <View style={{flex:1,flexDirection:'column',marginLeft:30,alignItems:'center',marginTop:40}}>
          <Text style={styles.txt}>{this.state.no3}</Text>
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
    width: 150,
    height: 150,
    marginTop:10,
    marginLeft:20,
    borderWidth:0,
    margin:0,
  },
  img2: {
    justifyContent:'flex-start',
    width: 150,
    height: 150,
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

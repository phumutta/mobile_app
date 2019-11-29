import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,Picker,Alert,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import database from './Database';

export default class Party1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status:0,
      no1:0,
    };
  }
  onPressVote(){

    if(this.state.status==0){
      database.readOnce(this.state.no1,this.read_Account_success,this.read_Account_fail)
      this.setState({status:1});

    }


  }
update_Account_success=async()=>{
    console.log('Update Success');
}

update_Account_fail=async()=>{
    console.log('Update Fail');
}
  read_Account_success=async(doc)=>{
    this.setState({no1:doc.power})
    console.log(this.state.no1);
    this.setState({no1:this.state.no1+1});
    
    account={
      power:this.state.no1,
    }
    database.updateAccount(account,this.update_Account_success,this.update_Account_fail);

  }

  read_Account_fail=async()=>{

}

  render() {
    return (
      <LinearGradient colors={['#F2FCFE',  '#1C92D2']} style={{ flex: 1 }}>
        <View >
          <Text style={styles.txt}> </Text>
          <Text
              style={styles.txt2}>

              01
          </Text>
          <Text style={styles.txt}> </Text>
          <Text style={styles.txt}> </Text>
          <Text style={styles.txt}> </Text>
          <View style={{justifyContent: 'center',alignItems: 'center',}}>
            <Image
              source={require('./1.png')}
              style={{width: 270, height: 150}}>
            </Image>
          </View>
          <Text style={styles.txt}> </Text>
          <Text style={styles.txt}> </Text>
          <Text style={styles.txt}> </Text>
           <View style={{justifyContent: 'center',alignItems: 'center',}}>
            <Image
              source={require('./2.jpg')}
              style={{width: 200, height: 150}}>
            </Image>
          </View>
          <Text style={styles.txt}> </Text>
          <Text style={styles.txt}> </Text>
          <View style={{justifyContent: 'center',alignItems: 'center'}} >
          <TouchableOpacity style={styles.viewBtn}>
            <View style={{justifyContent: 'center',alignItems: 'center'}} >
            <Text
              style={styles.txt1}
              onPress={()=>this.onPressVote()}>
                VOTE
            </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txt2: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black' ,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
  },
  viewBtn: {
    height: 50,
    width : 125,
    backgroundColor: '#020667',
    margin: 10,
    borderColor: '#020667',
    borderWidth: 1,
    borderRadius:10

  },
  txt:{
    textAlign: 'center',
    fontSize: 15,
    color: 'black'
  },
  txt1:{

    fontSize: 20,
    color: 'white',
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

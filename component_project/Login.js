import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,Button,TouchableOpacity,Picker,Alert,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import database from './Database'
import {AsyncStorage} from 'react-native';

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onPressOK = () => {
    account={
      email:this.state.email,
      password:this.state.password,
    }
    database.login(account,this._storeData,this.login__fail);


  };

  onPressRegister(){
  this.props.navigation.navigate('Page2Screen')
  }



  login_success=async()=>{
    Alert.alert("Login Success");
    this.props.navigation.navigate('Page4Screen')

  }
  _storeData = async () => {
  try {
    await AsyncStorage.setItem('@email', this.state.email);
    console.log(this.state.email);
    Alert.alert("Login Success");
    this.props.navigation.navigate('Page4Screen')
  } catch (error) {
    // Error saving data
  }
};

  login__fail=async(error)=>{
    Alert.alert("Wrong Password or Email");
  }


  onChangeTextEmail = email => this.setState({email});
  onChangeTextPassword = password => this.setState({password});
  render() {
    return (
      <LinearGradient
        colors={['#BBCBFF', '#FFFFFF']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{ flex: 1, marginTop: 50 }}>
            <Text style={styles.txt1}>Login</Text>

            <View style={{ flex: 1, marginTop: 50 }}>
              <TextInput
                style={styles.txtIn2}
                placeholder="Email"
                onChangeText={this.onChangeTextEmail}
              />
              <Text style={styles.txt}> </Text>
              <TextInput
                style={styles.txtIn2}
                placeholder="Password"
                secureTextEntry ={true}
                onChangeText={this.onChangeTextPassword}
              />
              <TouchableOpacity style={styles.viewBtn2}>
            <Text
              style={styles.txt2}
              onPress={() => this.onPressRegister()}>
              Register
            </Text>
          </TouchableOpacity>
            </View>

          </View>
        </View>
        <View style={{flex: 2}} />
        <View style={{flex: 2}} />
        <View style={{flex: 1}} />
        <View style={{flex: 1}} >
          <TouchableOpacity style={styles.viewBtn} onPress={this.onPressOK}>
            <Text  style={styles.txt}>

              Login

            </Text>

          </TouchableOpacity>
        </View>

      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewBtn: {
    height: 50,
    backgroundColor: 'black',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
viewBtn2: {
    height: 50,
    margin: 10,
  },
  txt:{
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  txt2:{
    textAlign: 'right',
    fontSize: 20,
    color: 'black',
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    textDecorationLine : 'underline'
  },
  txt1:{

    fontSize: 40,
    color: '#2F3E70',
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

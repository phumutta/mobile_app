import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,TextInput} from 'react-native';



import { LinearGradient } from 'expo-linear-gradient'
import database from './Database'


export default class Register extends React.Component {

  state = {
    email:'',
    password:'',
    name:'',
    phone:'',
    check:0
  };

  onPressAddAccount = () => {
    account={
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      password:this.state.password,
      check:this.state.check,
    }

    //console.log(account);
    database.createAccount2(account,this.add_Account_success,this.add_Account_fail);

  };

  add_Account_success=async(id)=>{
    account={
      name:this.state.name,
      phone:this.state.phone,
      email:this.state.email,
      password:this.state.password,
      check:this.state.check,
    }
    database.createAut(account,this.add_Aut_success,this.add_Aut_fail);
  }

  add_Account_fail=async()=>{
      console.log('Create Account fail');
  }

  add_Aut_success=async()=>{
    this.props.navigation.navigate('Page3Screen')


  }

  add_Aut_fail=async(error)=>{
      

  }

  onChangeTextEmail = email => this.setState({email});
  onChangeTextpassword = password => this.setState({password});
  onChangeTextname = name => this.setState({name});
  onChangeTextphone = phone => this.setState({phone});
  onPressnext= async() => {
    this.props.navigation.navigate('Page3Screen')

  };
  onPressblack= async() => {
    this.props.navigation.navigate('Page1Screen')
  };


  render() {
    return (
      <LinearGradient
       colors={['#BBCBFF', '#FFFFFF']}
       style={{flex: 1}}>
       <View style={{flex: 1}}>
        <Text style={{fontSize:35,marginTop:30,marginLeft:10,color:'#FFFFFF',textAlign:'left'}}> Register</Text>
        <Text style={{fontSize:20,marginTop:10,marginLeft:15,color:'#FFFFFF',textAlign:'left'}}> user information</Text>
        <TextInput
              style={styles.inputemail}
              placeholder="name"
              onChangeText={this.onChangeTextname}
          />
          <TextInput
              style={styles.inputpassword}
              placeholder="phone number"
              onChangeText={this.onChangeTextphone}
          />
          <Text style={{fontSize:20,marginTop:7,marginLeft:10,color:'#FFFFFF',textAlign:'left'}}> email & password</Text>
          <TextInput
              style={styles.inputemail}
              placeholder="email"
              onChangeText={this.onChangeTextEmail}
          />
          <TextInput
              style={styles.inputpassword}
              placeholder="password"
              onChangeText={this.onChangeTextpassword}
          />
       </View>
        <View>
          <View >
            <TouchableOpacity
              style={styles.login}
              onPress={this.onPressAddAccount}>
              <Text style={{fontSize:20, color:'#FFFFFF',textAlign:'center',fontWeight:'bold'}}> next</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.onPressblack()}>
              <Text style={{fontSize:17, color:'#000000',textAlign:'center',textDecorationLine:'underline',marginBottom:5,}}> back</Text>
          </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  login:{
    alignItems: 'center',
    padding:9,
    borderRadius: 10,
    borderColor:'black',
    borderWidth : 1,
    margin:10,
    marginTop:15,
    backgroundColor: '#000000'
  },
  inputemail:{
    alignItems: 'center',
    padding:9,
    borderColor:'#636D93',
    borderWidth : 2,
    margin:15,
    marginTop:10,
    backgroundColor: '#FFFFFF'
  },
  inputpassword:{
    alignItems: 'center',
    padding:9,
    borderColor:'#636D93',
    borderWidth : 2,
    margin:15,
    marginTop:5,
    backgroundColor: '#FFFFFF'
  }
});

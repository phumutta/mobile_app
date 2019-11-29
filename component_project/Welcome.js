import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity ,Image} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'

export default class Welcome extends React.Component {

    onPresslogin(){
       this.props.navigation.navigate('Page3Screen')
    }
    onPressRegister(){
       this.props.navigation.navigate('Page2Screen')
    }


  render() {
    return (
      <LinearGradient
       colors={['#BBCBFF', '#FFFFFF']}
       style={{flex: 1}}>
       <View style={{flex: 1}}>
        <Image style={{ width: 350, height: 350 ,marginTop:15,marginLeft:30}} source={require('./power2.png')} />
       </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.login}
              onPress={()=>this.onPresslogin()}>
              <Text style={{fontSize:15, color:'#000000',textAlign:'center',fontWeight:'bold'}}> LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.register}
              onPress={()=>this.onPressRegister()}>
              <Text style={{fontSize:15, color:'#FFFFFF',textAlign:'center',fontWeight:'bold'}}> REGISTER</Text>
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
    borderWidth : 2,
    margin:5,
    marginTop:50,
    marginBottom:20,
    backgroundColor: '#FFFFFF'
  },
  register:{
    alignItems: 'center',
    padding:9,
    borderRadius: 10,
    borderColor:'black',
    borderWidth : 1,
    margin:5,
    marginTop:50,
    marginBottom:20,
    backgroundColor: '#000000'
  }
});

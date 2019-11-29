import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
export default class Page2 extends React.Component {


  render() {
    return (
      <LinearGradient
       colors={['#BBCBFF', '#FFFFFF']}
       style={{flex: 1}}>

        <View style={{flex: 1,alignContent:'center'}} >
          <Text
              style={styles.txt}>
              Page 2
          </Text>
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
      fontSize:50
  },

})

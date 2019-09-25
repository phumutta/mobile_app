import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default class Page1 extends React.Component {


  onPressNext()
  {
    this.props.navigation.navigate('Page2Screen')
  }

  render() {
    return (
      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{ flex: 1 }}>

        <View style={{flex: 1,alignContent:'center'}} >

          <Text
              style={styles.txt}>
              Page 1
          </Text>

          <View style={{flex:1}}>

          </View>
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

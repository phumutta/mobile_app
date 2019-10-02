import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,Image } from 'react-native';

export default class Img extends React.Component {


  onPressNext()
  {
    this.props.navigation.navigate('Temporary1Screen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
        <Image
          style={{marginTop:10, width:200,height:200}}
          source={{uri:'https://ichef.bbci.co.uk/news/624/cpsprodpb/B6CC/production/_99069764_0455452b-9837-43ea-8810-e597efd2c4f2.jpg'}}/>
        </View>
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

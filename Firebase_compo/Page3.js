import React from 'react';
import { Constants , Permissions } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import {
  StyleSheet, Text,
  TextInput,  TouchableOpacity, View,
  Button, ImageEditor,Image,Alert,TouchableHighlight
} from 'react-native';
import database from './Database'
import { LinearGradient } from 'expo-linear-gradient'
import HeaderNavigationBar from './HeaderNavigationBar'

class Page3 extends React.Component {


  state = {
    imageuri:'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
    uploaduri: 'https://sv1.picz.in.th/images/2019/08/22/ZRRyeW.png',
    txtButton:'upload'
  };

  onPressOK = () => {
    database.uploadImage(this.state.imageuri,this.upload_success,this.upload_fail,this.uploading_status);


  };

  upload_success=async(uri)=>{
    this.setState({uploaduri:uri});
    this.setState({txtButton:"Success"});
  }

  upload_fail=async(error)=>{
    Alert.alert(error);

  }

  uploading_status=async(progress)=>{
    this.setState({txtButton:progress});
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
          this.setState({ imageuri: result.uri });
        }

};


  render() {
    return (

      <LinearGradient
       colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
       style={{flex: 1}}>
       <HeaderNavigationBar {...this.props} />
      <View style={{flex:1,justifyContent: 'center'}}>

        <View style={{justifyContent:'center', width:150}}>
           <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:20}}>Device Image</Text>

               <TouchableOpacity onPress={this.pickImage}>
               <Image
                   style={styles.imgStyles}
                   source={{uri:this.state.imageuri}}/>
               </TouchableOpacity>

        </View>

        <View style={{justifyContent:'center', width:150}}>
           <Text style={{textAlign:'center',marginTop:20,color:'white',fontSize:20}}>Upload Image</Text>
               <Image style={styles.imgStyles} source={{uri:this.state.uploaduri}}/>
        </View>

        <TouchableOpacity
          style={styles.touchableUser}
          onPress={this.onPressOK}>
            <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>{this.state.txtButton}</Text>
        </TouchableOpacity>

      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  },
  imgStyles: {
    width: 120,
    height: 120,
    alignItems:'center',
    resizeMode:'stretch',
    margin:10,
  }
});

export default Page3;

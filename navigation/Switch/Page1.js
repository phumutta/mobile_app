import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';

export default class Page1 extends React.Component {


  onPressNext()
  {
    this.props.navigation.navigate('Page2Screen')
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text
              style={styles.txt}>
              Page 1
          </Text>

          <View style={{flex:1}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.onPressNext()}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
          </View>
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

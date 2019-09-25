import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity} from 'react-native';

export default class Page3 extends React.Component {

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >
          <View style={styles.menu} >
            <TouchableOpacity
              style={styles.btn}
              onPress={this.props.navigation.toggleDrawer}>
              <Text style={styles.txt2} >
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <Text
              style={styles.txt}>
              Page 3
          </Text>

        </View>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'flex-end',
      height:40,

      backgroundColor: '#86A8E7',
      margin:10,
      marginTop:30,
  },
  txt:{
      textAlign: 'center',
      fontSize:50
  },
  txt2:{
      textAlign: 'center',
      fontSize:20
  },
  menu:{
    height: 80,
    width:'100%',
      alignItems: 'flex-end',
    backgroundColor: 'skyblue',

  },

})

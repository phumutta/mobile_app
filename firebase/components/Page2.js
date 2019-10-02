import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,ListView} from 'react-native';


export default class Page2 extends React.Component {

  constructor() {
   super();
   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
   this.state = {
     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
   };
   //await database.getAccount();
 }

 onPressUpdate = async() => {

 };

  render() {
    return (


        <View style={{flex: 1,alignContent:'center'}} >

          <TouchableOpacity
            style={styles.touchableUser}
            onPress={this.onPressUpdate}>
            <Text style={{fontSize:20, color:'black',textAlign:'center'}}>show</Text>
          </TouchableOpacity>

          <ListView style={styles.listViewStyle} dataSource={this.state.dataSource} renderRow={rowData => <Text>{rowData}</Text>} />
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
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'black',
    borderWidth : 1,
    margin:5,
    marginTop:20,
  },
  listViewStyle:{

    margin:5,
  }

})

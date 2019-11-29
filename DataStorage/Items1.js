import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";


const styles = StyleSheet.create({
sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
  touchableInput:{
    alignItems: 'center',
    padding:5,
    borderRadius: 50,
    borderColor:'white',
    borderWidth : 1,
    margin:5,
  }
});

const Items1 = ({heading,id,done,value}) => (

      <View style={styles.sectionContainer}>

        {id==1?(<Text style={styles.sectionHeading}>{heading}</Text>):null}
          <TouchableOpacity
            key={id}
            onPress={() => {Alert.alert(id.toString())}}
            style={{
              backgroundColor: "#fff",
              borderColor: "white",
              borderWidth: 1,
              padding: 8
            }}
          >
            <Text style={{ color: "#000" }}>{value}</Text>
          </TouchableOpacity>
      </View>
    );

export default Items1;

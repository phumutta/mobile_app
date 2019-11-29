import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,TextInput,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { Pedometer } from "expo-sensors";
export default class Page1 extends React.Component {
  state={
    height:'',
    weight:'',
    bmi:'',
    str:'YOUR BMI :',
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0

  };
  ShowAlert(){
      Alert.alert(this.state.bmi);
  }
  CALCULATOR(){

    this.setState({bmi:Number(this.state.weight)/((Number(this.state.height)/100)**2)});
    let tmp = this.state.str+Number(this.state.weight)/((Number(this.state.height)/100)**2).toString();
    Alert.alert(tmp);


  }
  componentDidMount() {
   this._subscribe();
 }

 componentWillUnmount() {
   this._unsubscribe();
 }
 _subscribe = () => {
   this._subscription = Pedometer.watchStepCount(result => {
     this.setState({
       currentStepCount: result.steps
     });
   });

   Pedometer.isAvailableAsync().then(
     result => {
       this.setState({
         isPedometerAvailable: String(result)
       });
     },
     error => {
       this.setState({
         isPedometerAvailable: "Could not get isPedometerAvailable: " + error
       });
     }
   );

   const end = new Date();
   const start = new Date();
   start.setDate(end.getDate() - 1);
   Pedometer.getStepCountAsync(start, end).then(
     result => {
       this.setState({ pastStepCount: result.steps });
     },
     error => {
       this.setState({
         pastStepCount: "Could not get stepCount: " + error
       });
     }
   );
 };

 _unsubscribe = () => {
   this._subscription && this._subscription.remove();
   this._subscription = null;
 };




  onChangeTextHeight = height => this.setState({height});
  onChangeTextWeight = weight => this.setState({weight});

  render() {
    return (
      <LinearGradient
      colors={['#F2FCFE',  '#1C92D2']}
       style={{flex: 1}}>

      <View style={{justifyContent: 'center',marginTop:50}}>
          <Text  style={styles.txt}>
              BMI CALCULATOR
          </Text>
      </View>
      <View style={{marginTop:50,flexDirection: 'row'}}>
          <Text style={styles.txt}>
              ส่วนสูง
          </Text>
          <TextInput
            style={styles.nameInput}
            placeholder="height"
            onChangeText={this.onChangeTextHeight}
        />
        </View>
        <View style={{marginTop:50,flexDirection: 'row'}}>
            <Text style={styles.txt}>
                น้ำหนัก
            </Text>
            <TextInput
              style={styles.nameInput}
              placeholder="weight"
              onChangeText={this.onChangeTextWeight}
          />
          </View>
          <TouchableOpacity
          style={styles.touchableUser}
          onPress={() => this.CALCULATOR()}
          >


          <Text style={{fontSize:20, color:'#FFFFFF',textAlign:'center'}}> CALCULATOR</Text>
        </TouchableOpacity>
        <View style={{marginTop:50,flexDirection: 'row'}}>
            <Text style={styles.txt}>
                จำนวนก้าวที่เดิน :
            </Text>
            <Text style={styles.txt}> {this.state.currentStepCount}</Text>

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
      fontSize:36,
      margin:5
  },
  touchableUser:{
    alignItems: 'center',
    padding:10,
    borderRadius: 50,
    borderColor:'black',
    borderWidth : 1,
    margin:5,
    marginTop:50,
    backgroundColor: '#000000'
  },
  text: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  textInput: {
      alignItems: 'center',
      height:50,
      width: 200,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
  },
  nameInput: {
      alignItems: 'center',
      height:50,
      backgroundColor: 'transparent',
      padding: 10,
      margin:5,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      fontSize:20,
      width: 250,
  },

})

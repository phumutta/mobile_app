import * as firebase from 'firebase';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHqmRV-GCSLm6rEafUghiZNkGqjldZwGw",
  authDomain: "my-project-141ab.firebaseapp.com",
  databaseURL: "https://my-project-141ab.firebaseio.com",
  projectId: "my-project-141ab",
  storageBucket: "my-project-141ab.appspot.com",
  messagingSenderId: "1021450998064",
  appId: "1:1021450998064:web:4281cdb15fdd0c73e538f5",
  measurementId: "G-EJMF7C3DDJ"
};
class Database{
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
//add_success add_fail เอาไว้เช็ค callback
async  createAccount(Account,add_success,add_fail){
    //async คือให้ฟังก์ชันทำงานไป ให้ programไปทำงานอื่นได้ async จะเป็นตัวรอ
    //ชื่อนี้ต้องตรงกับชื่อcollectionในfirebase add ในระบุ doc (generate doc auto),set ต้องระบุdoc
    //ref เพื่อให้return id กลับมา
    firebase.firestore().collection("Account").add(Account).then(ref =>(add_success(ref.id)),add_fail)
  }
  createAccount2(Account){
    firebase.firestore().collection("Account").doc("Test").set(Account).then(add_success,add_fail)
  }
}
const database =new Database();
export default database;

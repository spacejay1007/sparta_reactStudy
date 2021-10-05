import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore" 



const firebaseConfig = {
  apiKey: "AIzaSyARhVRmZfLk3QxybmC8Q3ZivOvU7pKgYoM",
  authDomain: "image-com.firebaseapp.com",
  projectId: "image-com",
  storageBucket: "image-com.appspot.com",
  messagingSenderId: "634829152970",
  appId: "1:634829152970:web:29c2f814e86757b21cca33",
  measurementId: "G-BV5JMG65E1",
};

firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore(); 
export{auth, apiKey, firestore };

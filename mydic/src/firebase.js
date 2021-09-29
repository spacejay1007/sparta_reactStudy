// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBReOdvsRPXfwQL2CywIn-FRPR1Dt_wa68",
  authDomain: "sparta-react-bf044.firebaseapp.com",
  projectId: "sparta-react-bf044",
  storageBucket: "sparta-react-bf044.appspot.com",
  messagingSenderId: "266032159170",
  appId: "1:266032159170:web:d44792976fb77688791e5b",
  measurementId: "G-BSZELH1SG4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYLZRnX4CNFbwQgWB1lSYe_taUE0angKU",
  authDomain: "lunar-website-aaeba.firebaseapp.com",
  projectId: "lunar-website-aaeba",
  storageBucket: "lunar-website-aaeba.appspot.com",
  messagingSenderId: "565144491398",
  appId: "1:565144491398:web:0f21e20b04ff3545b98807",
  measurementId: "G-M0VJXTMNQX",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();

export { database };

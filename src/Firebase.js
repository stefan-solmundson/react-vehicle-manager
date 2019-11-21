import * as firebase from "firebase";
// import firestore from "firebase/firestore";

// const settings = {};

const firebaseConfig = {
  apiKey: "AIzaSyBYVxUV18B_AhaNJdEBTDitEhtggRAtglE",
  authDomain: "stefan-vehicle-management.firebaseapp.com",
  databaseURL: "https://stefan-vehicle-management.firebaseio.com",
  projectId: "stefan-vehicle-management",
  storageBucket: "stefan-vehicle-management.appspot.com",
  messagingSenderId: "731895739388",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
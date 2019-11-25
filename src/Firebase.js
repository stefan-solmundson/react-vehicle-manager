import * as firebase from "firebase";
import firestore from 'firebase/firestore';

// const settings = { timestampsInSnapshots: true, };
const settings = { };

var firebaseConfig = {
  apiKey: "AIzaSyC3PPFIZGTQCyl1SAGa11hSAWV7eCe0a1I",
  authDomain: "stefan-react-firebase-example.firebaseapp.com",
  databaseURL: "https://stefan-react-firebase-example.firebaseio.com",
  projectId: "stefan-react-firebase-example",
  storageBucket: "stefan-react-firebase-example.appspot.com",
  messagingSenderId: "590337485054",
  // appId: "1:590337485054:web:8f8b39db6102eeff465daf"
};

firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings(settings);

export default firebase;

import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDsWft8N0ueHqKmXKaXVq95_aEYuocnhy4",
  authDomain: "burger-queen-1b372.firebaseapp.com",
  databaseURL: "https://burger-queen-1b372.firebaseio.com",
  projectId: "burger-queen-1b372",
  storageBucket: "burger-queen-1b372.appspot.com",
  messagingSenderId: "498400406797"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

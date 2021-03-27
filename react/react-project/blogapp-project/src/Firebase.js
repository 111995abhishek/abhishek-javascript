import firebase from "firebase";
import   "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyCNgfZrfip2mOQuHBQm2nSFsNR8aYXhXTo",
    authDomain: "blog-app-8d456.firebaseapp.com",
    projectId: "blog-app-8d456",
    storageBucket: "blog-app-8d456.appspot.com",
    messagingSenderId: "581281623412",
    appId: "1:581281623412:web:6cef8938eb97d634c35021"
  };

    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();
export const auth = firebase.auth();
export const firestore= firebase.firestore;
export default db;

import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVVRRDh5y_cEt7Xo9DwYtoOjpoynU91go",
    authDomain: "todo-b4670.firebaseapp.com",
    projectId: "todo-b4670",
    storageBucket: "todo-b4670.appspot.com",
    messagingSenderId: "163401595224",
    appId: "1:163401595224:web:0b965c40f4494e39c28d2d"
  });

  const db = firebase.firestore();
  const storage = firebase.storage();
  

  export  {db,storage};
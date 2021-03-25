import  firebase from "firebase";
import   "firebase/database";

let config = {
    apiKey: "AIzaSyA7oGQ3w0nc33fxbKcar3w_maJlBptQDTk",
    authDomain: "bezkoder-firebase-a2afe.firebaseapp.com",
    projectId: "bezkoder-firebase-a2afe",
    storageBucket: "bezkoder-firebase-a2afe.appspot.com",
    messagingSenderId: "770785105593",
    appId: "1:770785105593:web:ebeaa5f5c9f49f8cc02d68",

};

firebase.initializeApp(config);

export default firebase.database();


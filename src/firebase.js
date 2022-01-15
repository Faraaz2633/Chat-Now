import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD6ikjCI0UTCtm13UsfYIGdYK-Gf0BchRw",
    authDomain: "unichat-2f776.firebaseapp.com",
    projectId: "unichat-2f776",
    storageBucket: "unichat-2f776.appspot.com",
    messagingSenderId: "523742186376",
    appId: "1:523742186376:web:7b0aa0f5c77a94fa24c83d"
}).auth();
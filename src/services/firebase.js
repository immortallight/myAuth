import firebase from 'firebase/app';
import "firebase/auth";
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6jZ_QhUpF8jUpaMV8tFDIBl0li0X-bLM",
    authDomain: "navbar-auth.firebaseapp.com",
    projectId: "navbar-auth",
    storageBucket: "navbar-auth.appspot.com",
    messagingSenderId: "134852761881",
    appId: "1:134852761881:web:b4d82907af4f149fb88d88",
    measurementId: "G-M3BLLN7LDZ"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);

// export default app;
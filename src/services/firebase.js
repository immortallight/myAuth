import "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyA6jZ_QhUpF8jUpaMV8tFDIBl0li0X-bLM",
  // authDomain: "navbar-auth.firebaseapp.com",
  // projectId: "navbar-auth",
  // storageBucket: "navbar-auth.appspot.com",
  // messagingSenderId: "134852761881",
  // appId: "1:134852761881:web:b4d82907af4f149fb88d88",
  // measurementId: "G-M3BLLN7LDZ",
  apiKey: "AIzaSyBTvOkb6-BwL6TLu5RNa_gts3-Pk1tNUj4",
  authDomain: "auth-project-72d3a.firebaseapp.com",
  projectId: "auth-project-72d3a",
  storageBucket: "auth-project-72d3a.appspot.com",
  messagingSenderId: "366038918539",
  appId: "1:366038918539:web:91ff4f03083d996fd07b8e",
  measurementId: "G-R2LLPMBZE0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default app;

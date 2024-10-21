
// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB-KpZGzDcyOnD219THS20ZGtih_LFfQiU",
  apiKey: "AIzaSyD7ueHyH6tPKM39ObVgqzgqAIgaqz4ecIA",
  // authDomain: "realtoime-chatt-app.firebaseapp.com",
   authDomain: "chat-stream-vkp.firebaseapp.com",
  // projectId: "realtoime-chatt-app",
  projectId: "chat-stream-vkp",
  // storageBucket: "realtoime-chatt-app.appspot.com",
  storageBucket: "chat-stream-vkp.appspot.com",
  // messagingSenderId: "623047468851",
  messagingSenderId: "475748444070",
  // appId: "1:623047468851:web:0f4fcc4d75f06475690046"
  appId: "1:475748444070:web:ac483b39e53a41f8b7d167"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db ,auth, provider };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD7ueHyH6tPKM39ObVgqzgqAIgaqz4ecIA",
//   authDomain: "chat-stream-vkp.firebaseapp.com",
//   projectId: "chat-stream-vkp",
//   storageBucket: "chat-stream-vkp.appspot.com",
//   messagingSenderId: "475748444070",
//   appId: "1:475748444070:web:ac483b39e53a41f8b7d167"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
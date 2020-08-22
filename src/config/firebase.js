import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyB8ewMbC63aT0KiFrfJccfMOyNHrB20YaM",
  authDomain: "xpressrx-delivery.firebaseapp.com",
  databaseURL: "https://xpressrx-delivery.firebaseio.com",
  projectId: "xpressrx-delivery",
  storageBucket: "xpressrx-delivery.appspot.com",
  messagingSenderId: "811823418261",
  appId: "1:811823418261:web:194cab3f0ba8637a8b849c",
  measurementId: "G-GFGHGH7NVR",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();

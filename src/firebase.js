import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1aaNv6rrsz8HQp2wI_5tOwF_JU4l7tAY",
    authDomain: "duocode-40abc.firebaseapp.com",
    databaseURL: "https://duocode-40abc.firebaseio.com",
    projectId: "duocode-40abc",
    storageBucket: "duocode-40abc.appspot.com",
    messagingSenderId: "609177709884",
    appId: "1:609177709884:web:5f37005613d414e4604239",
    measurementId: "G-8HSEF905MY"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA1aaNv6rrsz8HQp2wI_5tOwF_JU4l7tAY",
  authDomain: "duocode-40abc.firebaseapp.com",
  databaseURL: "https://duocode-40abc.firebaseio.com",
  projectId: "duocode-40abc",
  storageBucket: "duocode-40abc.appspot.com",
  messagingSenderId: "609177709884",
  appId: "1:609177709884:web:5f37005613d414e4604239",
  measurementId: "G-8HSEF905MY",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  //authentication API (contextAPI)

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  //user API

  user = (uid) => this.db.doc(`users/${uid}`);

  users = () => this.db.doc("users");

  //chat API
  chatRef = () => this.db.doc("general");
}

export default Firebase;

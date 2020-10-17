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
  measurementId: "G-8HSEF905MY",
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, course, checkpoint, match } = user;
    try {
      await userRef.set({
        displayName,
        email,
        course: 1,
        checkpoint: 1,
        match: false,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

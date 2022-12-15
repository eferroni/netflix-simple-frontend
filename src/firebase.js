import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-clone-78edc.firebaseapp.com",
  projectId: "netflix-clone-78edc",
  storageBucket: "netflix-clone-78edc.appspot.com",
  messagingSenderId: "111913948052",
  appId: "1:111913948052:web:627b762617cee676ceb581",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

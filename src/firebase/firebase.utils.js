import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAd58tnZR0wpfdrCFlUEuw4PnmHevRjYGY",
  authDomain: "ty-dye-db.firebaseapp.com",
  projectId: "ty-dye-db",
  storageBucket: "ty-dye-db.appspot.com",
  messagingSenderId: "102685867175",
  appId: "1:102685867175:web:ed16e222523bf9ccf1ef82",
  measurementId: "G-L7LRKHSQHD",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

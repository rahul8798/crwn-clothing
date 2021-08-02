import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDD2vujKYVajq1nDtBKTsyv4Q_6h1koeWs",
  authDomain: "crwn-db-7503e.firebaseapp.com",
  projectId: "crwn-db-7503e",
  storageBucket: "crwn-db-7503e.appspot.com",
  messagingSenderId: "88787460895",
  appId: "1:88787460895:web:4e653353fd00a9b29b462a",
  measurementId: "G-ZJXEZGVT79",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
  apiKey: "AIzaSyCJ5Pq0pX2b-zKBE8JgNvjOXnCK7kE6AMQ",
  authDomain: "clothing-web-1ec86.firebaseapp.com",
  databaseURL: "https://clothing-web-1ec86.firebaseio.com",
  projectId: "clothing-web-1ec86",
  storageBucket: "clothing-web-1ec86.appspot.com",
  messagingSenderId: "1076042488291",
  appId: "1:1076042488291:web:2fc3306d44f841d95ee8d6",
  measurementId: "G-0M2CPL2KW2"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
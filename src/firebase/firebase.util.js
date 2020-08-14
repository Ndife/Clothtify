import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyABrNotYm-We6aOUlhF2apX5_wHd7-wQ10",
    authDomain: "clothtify-db.firebaseapp.com",
    databaseURL: "https://clothtify-db.firebaseio.com",
    projectId: "clothtify-db",
    storageBucket: "clothtify-db.appspot.com",
    messagingSenderId: "432078027795",
    appId: "1:432078027795:web:1abe10189b9579e10dd3e6",
    measurementId: "G-LW09XSCWC1"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
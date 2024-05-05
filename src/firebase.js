import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtjUJoX_MxvtNrZBrvZjD5fPrtoTx2eBA",
    authDomain: "tinder-clone-733c8.firebaseapp.com",
    projectId: "tinder-clone-733c8",
    storageBucket: "tinder-clone-733c8.appspot.com",
    messagingSenderId: "262794637839",
    appId: "1:262794637839:web:4a3bd40731fb94a085a97a",
    measurementId: "G-GDRDXDL3BS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

// Export the variable you need access to later
export default database;
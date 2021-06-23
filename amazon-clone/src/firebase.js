import firebase from "firebase";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
    apiKey: "AIzaSyCGW0rZhIcwihwgypGinAnZjlpvOP6RoAo",
    authDomain: "clone-ae45d.firebaseapp.com",
    projectId: "clone-ae45d",
    storageBucket: "clone-ae45d.appspot.com",
    messagingSenderId: "553851420292",
    appId: "1:553851420292:web:478602e83c078bc2454cd1",
    measurementId: "G-H8HMVL7FNB"
  };


export {auth, provider};
export default db;
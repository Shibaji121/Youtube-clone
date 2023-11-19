import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPWRsTv0XEXh4hbME8mqo-MSOPFAoaKP4",
  authDomain: "utube-clone121.firebaseapp.com",
  projectId: "utube-clone121",
  storageBucket: "utube-clone121.appspot.com",
  messagingSenderId: "908496323338",
  appId: "1:908496323338:web:c07abaac55a968d82e70f3",
  measurementId: "G-5XDE1RSWW1",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();

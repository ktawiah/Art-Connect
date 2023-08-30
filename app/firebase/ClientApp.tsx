import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBny5EYXgWH8QhqIdMBtj8qL89xMuiaavM",
  authDomain: "art-connect-856c5.firebaseapp.com",
  projectId: "art-connect-856c5",
  storageBucket: "art-connect-856c5.appspot.com",
  messagingSenderId: "195040725091",
  appId: "1:195040725091:web:c1b9f9982b41349c6e9056",
  measurementId: "G-2GHM3Z3XG3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

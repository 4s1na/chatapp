// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDjeLfm9gUHeN6yYxD_rzuycvqjX0l9Q",
  authDomain: "chatapp-ddb25.firebaseapp.com",
  projectId: "chatapp-ddb25",
  storageBucket: "chatapp-ddb25.firebasestorage.app",
  messagingSenderId: "324367035757",
  appId: "1:324367035757:web:3e7ccc87ca47dfd40e3e64",
  measurementId: "G-561J8F34D7"
};

// Initialize Firebase
const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

const analytics = getAnalytics(app);
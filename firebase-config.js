// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyASDjeLfm9gUHeN6yYxD_rzuycvqjX0l9Q",
  authDomain: "chatapp-ddb25.firebaseapp.com",
  projectId: "chatapp-ddb25",
  storageBucket: "chatapp-ddb25.appspot.com",   // ✅ fixed
  messagingSenderId: "324367035757",
  appId: "1:324367035757:web:3e7ccc87ca47dfd40e3e64",
  measurementId: "G-561J8F34D7"
};

// initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// optional analytics (comment out if causes issues)
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

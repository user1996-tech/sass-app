import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDw3rcnmNYJW4Rs8GLJZEhMzpZRxaJAaCQ",
  authDomain: "sass-app-56135.firebaseapp.com",
  projectId: "sass-app-56135",
  storageBucket: "sass-app-56135.appspot.com",
  messagingSenderId: "815470299858",
  appId: "1:815470299858:web:9210c4d8d7cf62367d3b0b",
  measurementId: "G-X1BV7LY6X3",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };

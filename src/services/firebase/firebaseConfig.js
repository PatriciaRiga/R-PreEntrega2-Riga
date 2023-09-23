import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA57nqEQ3GFnYPghpUCqwioBh3sNjlzEA4",
  authDomain: "ecoargento-9b2ce.firebaseapp.com",
  projectId: "ecoargento-9b2ce",
  storageBucket: "ecoargento-9b2ce.appspot.com",
  messagingSenderId: "145479621569",
  appId: "1:145479621569:web:8893c0a96a0b7b00676d40"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
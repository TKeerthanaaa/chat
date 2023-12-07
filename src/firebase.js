import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZroPVQ-uXj2V-UHq8ADPM9A1NZM5NmH4",
  authDomain: "chat-e9dc4.firebaseapp.com",
  projectId: "chat-e9dc4",
  storageBucket: "chat-e9dc4.appspot.com",
  messagingSenderId: "1082817251099",
  appId: "1:1082817251099:web:e6afb40e327c1c59cab5be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

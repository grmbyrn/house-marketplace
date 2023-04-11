import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsXJ7ImKGwxqjm6Ea150SC40aFlv8IAM",
  authDomain: "house-marketplace-app-c646b.firebaseapp.com",
  projectId: "house-marketplace-app-c646b",
  storageBucket: "house-marketplace-app-c646b.appspot.com",
  messagingSenderId: "288348887633",
  appId: "1:288348887633:web:1d5aedbeed79c7d0db3670"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
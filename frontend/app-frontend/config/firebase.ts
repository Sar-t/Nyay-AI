import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwbpJrbRztsHghuAi2FJqRhEoK0P1n9Y8",
  authDomain: "nyayaiauth.firebaseapp.com",
  projectId: "nyayaiauth",
  storageBucket: "nyayaiauth.firebasestorage.app",
  messagingSenderId: "112041338894",
  appId: "1:112041338894:web:faf2a8e149e4a1c5c5b45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with browser local persistence
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence
});
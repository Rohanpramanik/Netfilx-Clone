// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdtggl4JCu-HuXNa-upEWPLr6S5eRMQ7I",
  authDomain: "netflixgpt-b87f9.firebaseapp.com",
  projectId: "netflixgpt-b87f9",
  storageBucket: "netflixgpt-b87f9.appspot.com",
  messagingSenderId: "100217353455",
  appId: "1:100217353455:web:b816c126a988bf1224971a",
  measurementId: "G-VYZT2LPM3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
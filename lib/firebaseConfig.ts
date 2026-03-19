// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj15zSTqBvyqUsWVYRz3tQlIEAniWTMWA",
  authDomain: "foodallpur-database.firebaseapp.com",
  projectId: "foodallpur-database",
  storageBucket: "foodallpur-database.firebasestorage.app",
  messagingSenderId: "620274381926",
  appId: "1:620274381926:web:42eecfae77fe51fb0ca9a7",
  measurementId: "G-YH3W0J93QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

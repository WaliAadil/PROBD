// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVOdFJH9Ri8RRgRomAWo6kzSWgx6IVboU",
  authDomain: "test123-d3ded.firebaseapp.com",
  projectId: "test123-d3ded",
  storageBucket: "test123-d3ded.firebasestorage.app",
  messagingSenderId: "142512964803",
  appId: "1:142512964803:web:0588bca35d0c31a84ece76",
  measurementId: "G-CRVP5GLEJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized and Firestore DB exported.");

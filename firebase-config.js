// firebase-config.js

// Import the functions you need from the SDKs you need, using full CDN paths
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// Your web app's Firebase configuration
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

// Initialize Firestore and export it
export const db = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

console.log("Firebase app initialized. Firestore DB instance available.");

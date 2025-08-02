// data-display.js

import { db } from './firebase-config.js';
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// --- Important: Ensure your HTML has an element with id="text-28" ---

// Get a reference to the document
const docRef = doc(db, "test", "test1");

// Set up a real-time listener
onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Real-time Document data received:", data);

        const fuelLevel = data.fuelLevel;
        const mileage = data.mileage;
        const condition = data.condition;
        const maintainance = data.maintenance;
        const targetElement = document.getElementById("text-28");
        const mileageElement = document.getElementById("text-23");
        const conditionElement = document.getElementById("text-18");
        const maintainanceElement = document.getElementById("text-33");

        if (targetElement) {
            targetElement.innerText = fuelLevel;
        } else {
            console.error("HTML element with ID 'text-28' not found!");
        }

        if (mileageElement) {
            mileageElement.innerText = mileage;
        }

        if (conditionElement) {
            conditionElement.innerText = condition;
        }

        if (maintainanceElement) {
            // If maintainance is a Firestore Timestamp object
            let displayValue = maintainance;
            if (maintainance && typeof maintainance.toDate === "function") {
                const dateObj = maintainance.toDate();
                // Format as MM/DD/YYYY (or customize as needed)
                displayValue = dateObj.toLocaleDateString();
            }
            maintainanceElement.innerText = displayValue;
        }
        
    } else {
        console.log("Document 'test1' in collection 'test' no longer exists!");
        const targetElement = document.getElementById("text-28");
        if (targetElement) targetElement.innerText = "N/A";
    }
}, (error) => {
    console.error("Error getting real-time updates from Firestore:", error);
    const targetElement = document.getElementById("text-28");
    if (targetElement) targetElement.innerText = "Error";
});

console.log("Firestore real-time listener for 'test/test1' is active.");

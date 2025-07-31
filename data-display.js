// data-display.js

// Import the 'db' object from your firebase-config.js file
// This assumes firebase-config.js is in the same directory and correctly exports 'db'
import { db } from './firebase-config.js';

// --- Important: Ensure your HTML has an element with id="text-28" ---
// Example: <p><span id="text-28">Loading Fuel...</span></p>

// Set up a real-time listener for the 'test1' document in the 'test' collection
db.collection("test").doc("test1")
    .onSnapshot((doc) => { // This function runs every time the document changes
        if (doc.exists) {
            // Document found! Get its data.
            const data = doc.data();
            console.log("Real-time Document data received:", data);

            // Get the specific 'fuelLevel' value from the document data
            const fuelLevel = data.fuelLevel;

            // Find our HTML element by its new ID "text-28"
            const targetElement = document.getElementById("text-28");

            // If the element is found, update its text content
            if (targetElement) {
                targetElement.innerText = fuelLevel; // This will replace whatever is inside <span id="text-28">
            } else {
                console.error("HTML element with ID 'text-28' not found!");
            }
        } else {
            // Document doesn't exist or was deleted
            console.log("Document 'test1' in collection 'test' no longer exists!");
            const targetElement = document.getElementById("text-28");
            if (targetElement) targetElement.innerText = "N/A"; // Display "N/A" if data is gone
        }
    }, (error) => { // Error handling for the listener
        console.error("Error getting real-time updates from Firestore:", error);
        const targetElement = document.getElementById("text-28");
        if (targetElement) targetElement.innerText = "Error"; // Display "Error" if something goes wrong
    });

console.log("Firestore real-time listener for 'test/test1' is active.");

// data-display.js

import { db } from './firebase-config.js';
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { model } from './firebase-config.js'; // Make sure 'model' is exported from firebase-config.js

// --- Important: Ensure your HTML has an element with id="text-28" ---

// Get a reference to the document
const docRef = doc(db, "test", "test1");

// Set up a real-time listener
onSnapshot(docRef, async (docSnap) => {
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
            targetElement.innerText = `${fuelLevel} %`;
        } else {
            console.error("HTML element with ID 'text-28' not found!");
        }

        if (mileageElement) {
            mileageElement.innerText = `${mileage} miles`;
        }

        if (conditionElement) {
            conditionElement.innerText = condition;
        }

        if (maintainanceElement) {
            let displayValue = maintainance;
            if (maintainance && typeof maintainance.toDate === "function") {
                const dateObj = maintainance.toDate();
                displayValue = dateObj.toLocaleDateString();
            }
            maintainanceElement.innerText = displayValue;
        }

        // --- Firebase AI Prompt ---
        try {
            const prompt = `Vehicle stats: Fuel Level: ${fuelLevel}%, Mileage: ${mileage} miles, Condition: ${condition}, Next Maintenance: ${maintainance && typeof maintainance.toDate === "function" ? maintainance.toDate().toLocaleDateString() : maintainance}. Give a tip to improve efficiency and performance.`;
            const aiResponse = await model.generateContent(prompt);
            console.log("Firebase AI response:", aiResponse.text || aiResponse.candidates?.[0]?.content?.parts?.[0]?.text || aiResponse);
        } catch (error) {
            console.error("Error with Firebase AI:", error);
        }

    } else {
        console.log("Document 'test1' in collection 'test' no longer exists");
        const targetElement = document.getElementById("text-28");
        if (targetElement) targetElement.innerText = "N/A";
    }
}, (error) => {
    console.error("Error getting real-time updates from Firestore:", error);
    const targetElement = document.getElementById("text-28");
    if (targetElement) targetElement.innerText = "Error";
});

console.log("Firestore real-time listener for 'test/test1' is active.");

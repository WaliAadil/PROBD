// data-display.js

// Import the 'db' object from your firebase-config.js file
import { db } from './firebase-config.js';

// Now, let's pull your data!
db.collection("test").doc("test1").get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            console.log("Document data:", data);

            const fuelLevel = data.fuelLevel;

            const fuelLevelElement = document.getElementById("text-28");
            if (fuelLevelElement) {
                fuelLevelElement.innerText = fuelLevel;
            }
        } else {
            console.log("No such document 'test1' in collection 'test'!");
            const fuelLevelElement = document.getElementById("fuelLevelDisplay");
            if (fuelLevelElement) fuelLevelElement.innerText = "Error: Data not found";
        }
    })
    .catch((error) => {
        console.error("Error getting document:", error);
        const fuelLevelElement = document.getElementById("fuelLevelDisplay");
        if (fuelLevelElement) fuelLevelElement.innerText = "Error: Failed to load data";
    });

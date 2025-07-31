document.addEventListener("DOMContentLoaded", () => {
  const db = firebase.firestore(); // Reuse the already-initialized Firebase app

  const outputElement = document.getElementById("text-28");

  db.collection("test").doc("test1").get()
    .then((doc) => {
      if (doc.exists) {
        const fuelLevel = doc.data().fuelLevel;
        outputElement.textContent = `Fuel Level: ${fuelLevel}`;
      } else {
        outputElement.textContent = "No such document found.";
      }
    })
    .catch((error) => {
      console.error("Error fetching document:", error);
      outputElement.textContent = "Error fetching data.";
    });
});

// Save data to session storage
function saveSessionData() {
    const message = document.getElementById("sessionInput").value;
    sessionStorage.setItem("sessionMessage", message);
    alert("Message saved for this session!");
}

// Load data from session storage
function loadSessionData() {
    const storedMessage = sessionStorage.getItem("sessionMessage");
    const output = document.getElementById("output");

    if (storedMessage) {
        output.textContent = `Stored Message: ${storedMessage}`;
    } else {
        output.textContent = "No message found in session storage.";
    }
}

// Save the name to local storage
function saveName() {
    const nameInput = document.getElementById("nameInput").value;
    localStorage.setItem("userName", nameInput);
    alert("Name saved!");
}

// Load the name from local storage
function loadName() {
    const storedName = localStorage.getItem("userName");
    const greeting = document.getElementById("greeting");
    
    if (storedName) {
        greeting.textContent = `Hello, ${storedName}!`;
    } else {
        greeting.textContent = "No name found in storage.";
    }
}

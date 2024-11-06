// Pure function to format text
function formatText(text) {
    return text.toUpperCase();
  }
  
  // Function to get input, apply pure function, and display result
  function displayFormattedText() {
    const input = document.getElementById('userInput').value;
    const output = formatText(input); // Pure function call
    document.getElementById('output').textContent = output;
  }
  
// Pipe function that takes an initial value and applies functions in sequence
function pipe(...fns) {
    return (input) => fns.reduce((acc, fn) => fn(acc), input);
  }
  
  // Pure functions for text transformations
  const trimText = (text) => text.trim();
  const toUpperCase = (text) => text.toUpperCase();
  const appendText = (text) => `${text} - Transformed`;
  
  // Function to transform text using pipe
  function transformText() {
    const input = document.getElementById('userInput').value;
  
    // Compose transformations with pipe
    const transform = pipe(trimText, toUpperCase, appendText);
  
    // Apply transformations and display output
    const output = transform(input);
    document.getElementById('output').textContent = output;
  }
  
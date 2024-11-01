// Create a closure to maintain a private counter
function createCounter() {
    let count = 0; // This variable is "closed over" by the inner function
    return function() {
        count++;
        return count;
    };
}

// Initialize the counter function
const counter = createCounter();

// Access DOM elements
const button = document.getElementById('closureBtn');
const output = document.getElementById('output');

// Add event listener to button
button.addEventListener('click', () => {
    const count = counter();
    output.textContent = `Button clicked ${count} times.`;
});

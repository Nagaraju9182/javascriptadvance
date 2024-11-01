// Currying function for multiplication
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

// Access DOM elements
const num1Input = document.getElementById('number1');
const num2Input = document.getElementById('number2');
const multiplyBtn = document.getElementById('multiplyBtn');
const output = document.getElementById('output');

// Add event listener to button
multiplyBtn.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        output.textContent = 'Please enter valid numbers!';
    } else {
        const result = multiply(num1)(num2); // Using the curried multiply function
        output.textContent = `Result: ${result}`;
    }
});

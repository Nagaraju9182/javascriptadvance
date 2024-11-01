// Constructor function for Person
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Adding a method to Person's prototype
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

// Access DOM elements
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const createPersonBtn = document.getElementById('createPersonBtn');
const output = document.getElementById('output');

// Add event listener to button
createPersonBtn.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (firstName === '' || lastName === '') {
        output.textContent = 'Please enter both first and last names!';
    } else {
        // Create a new Person instance
        const person = new Person(firstName, lastName);
        // Use the prototype method to get the full name
        output.textContent = `Full Name: ${person.getFullName()}`;
    }
});

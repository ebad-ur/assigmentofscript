// Array to store user information
const users = [];

// Function to handle the signup process
document.getElementById('signup-button').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if the email is already registered
    if (users.find(user => user.email === email)) {
        alert('Email already registered. Please use a different email.');
    } else {
        // Add the user to the array
        users.push({ name, email, password });
        alert('Signup successful! You can now log in.');
    }

    // Clear the signup form
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';
});

// Function to handle the login process
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Find the user with the provided email
    const user = users.find(user => user.email === email);

    if (user && user.password === password) {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
    }

    // Clear the login form
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
});
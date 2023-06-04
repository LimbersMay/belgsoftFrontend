import {authenticateUser} from "../../../domain/auth/auth.service.js";

const loginForm = document.getElementById('login-form');

// When the form is submitted, we perform this function
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // get the values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Response from the domain
    const response = await authenticateUser(email, password);

    if (response.error) {
        document.getElementById('error__message').innerHTML = response.error;
    }

    if (response.token) {
        // Save the token in the local storage
        localStorage.setItem('token', response.token);
    }

    if (response.user.role === 'WAITER') {
        // Redirect to the waiter page
        window.location.href = '../../waiter/order-summary.html';
    }
});

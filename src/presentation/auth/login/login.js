import {authenticateUser} from "../../../domain/auth/auth.service";
import {getValidationError} from "../utils/get-validation-error";

const loginForm = document.getElementById('login-form');

// When the form is submitted, we perform this function
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // get the values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Response from the domain
    const response = await authenticateUser(email, password);

    // Domain error
    if (response.error) {
        document.getElementById('error__message').innerHTML = response.error;
        return;
    }

    // Server error
    if (response.serverError) {
        document.getElementById('error__message').innerHTML = getValidationError(response.serverError);
        return;
    }

    // save the token in the local storage
    localStorage.setItem('token', response.token);
});

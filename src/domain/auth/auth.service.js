import {login} from "../../data/auth/auth.repository";

export const authenticateUser = async (email, password) => {

    // Check if the email and password are not empty
    if (!email || !password) {
        return {
            error: "El correo y la contraseña son obligatorios"
        }
    }

    // Check if the email is valid
    const isValidEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!isValidEmail) {
        return {
            error: "El correo no es válido"
        }
    }

    // Response from the repository
    const response = await login(email, password);

    // Check if there are errors
    if (response.error) {
        return response;
    }

    return {
        user: response.user,
        token: response.token
    };
}

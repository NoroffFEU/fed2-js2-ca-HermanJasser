import { login } from "../../api/auth/login";

const loginForm = document.getElementById("login");

/**
 * Handles the login form submission by preventing the default form action,
 * retrieving the user's email and password from the form, and invoking the login function.
 *
 * @async
 * @function onLogin
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} Invokes the login process.
 */
export async function onLogin(event) {
    event.preventDefault();

    // Trim input values to remove excess whitespace
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();

    // Call the login function with the provided credentials
    login(email, password);
}


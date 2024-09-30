import { API_AUTH_LOGIN } from "../constants";

/**
 * Logs in a user by sending the provided email and password to the authentication API.
 *
 * @async
 * @function login
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @throws Will throw an error if the login attempt fails.
 * @returns {Promise<void>} Redirects the user to the home page on successful login.
 */
export async function login(email, password) {
    try {
        // Options for the fetch request
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        };

        // Send the login request
        const response = await fetch(API_AUTH_LOGIN, options);

        // If the response is ok, handle the returned data
        if (response.ok) {
            const data = await response.json();

            // Store username and token in localStorage
            localStorage.setItem("username", data.data.name);
            localStorage.setItem("token", data.data.accessToken);

            // Redirect to the home page
            location.href = "/";
        } else {
            // Throw an error if the response is not ok
            throw new Error(response.statusText);
        }
    } catch (error) {
        // Show an alert and log the error to the console
        window.alert("Can't login");
        console.error(error.message);
    }
}

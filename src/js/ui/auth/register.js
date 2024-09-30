import { postRegisterInfo } from "../../api/auth/register";

const registerForm = document.getElementById("register");

/**
 * Handles the registration form submission by preventing the default form action,
 * retrieving the user's name, email, and password from the form, and invoking the registration function.
 *
 * @async
 * @function onRegister
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} Invokes the registration process.
 */
export async function onRegister(event) {
    event.preventDefault();

    // Trim input values to remove excess whitespace
    const name = registerForm.name.value.trim();
    const email = registerForm.email.value.trim();
    const password = registerForm.password.value.trim();

    // Call the postRegisterInfo function with the provided credentials
    postRegisterInfo(name, email, password);
}



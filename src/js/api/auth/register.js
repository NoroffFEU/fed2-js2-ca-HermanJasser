import { API_AUTH_REGISTER } from "../constants";

/**
 * Sends the user's registration information to the authentication API.
 *
 * @async
 * @function postRegisterInfo
 * @param {string} name - The name of the user.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @throws Will throw an error if the registration attempt fails.
 * @returns {Promise<void>} Alerts the user if registration is successful or fails.
 */
export async function postRegisterInfo(name, email, password) {
  try {
    // Options for the fetch request
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };

    // Send the registration request
    const response = await fetch(API_AUTH_REGISTER, options);

    // If the response is ok, handle the returned data
    if (response.ok) {
      const data = await response.json();

      // Notify the user of successful registration
      window.alert("User created");

      // Redirect to the login page
      window.location = "/auth/login/";
    } else {
      // Throw an error if the response is not ok
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Log the error and notify the user of failure
    console.error(error.message);
    window.alert("User already exists");
  }
}




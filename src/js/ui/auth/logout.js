/**
 * Handles the logout process by removing the user's credentials from localStorage
 * and redirecting the user to the login page.
 *
 * @function onLogout
 * @returns {void} Clears the user's session and navigates to the login page.
 */
export function onLogout() {
    // Remove user credentials from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("token");

    // Redirect to the login page
    window.location = "/auth/login/";
}


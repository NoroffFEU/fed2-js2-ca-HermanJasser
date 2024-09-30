/**
 * Checks if the user is authenticated by verifying the presence of a token in localStorage.
 * If the user is not logged in, an alert is displayed and the user is redirected to the login page.
 *
 * @function authGuard
 * @returns {void} Checks user authentication and redirects if not logged in.
 */
export function authGuard() {
  // Check for the presence of a token in localStorage
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    // Redirect to the login page if not authenticated
    window.location.href = "/auth/login/";
  }
}

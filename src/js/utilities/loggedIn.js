/**
 * Checks if the user is logged in by verifying the presence of a token in localStorage.
 * If the user is logged in, the function redirects them to the home page.
 *
 * @function isLoggedIn
 * @returns {void} Redirects to the home page if the user is logged in.
 */
export function isLoggedIn() {
  // Check for the presence of a token in localStorage
  if (localStorage.token) {
      // Redirect to the home page
      location = "/";
      location.href = "/";
      location.assign("/");
      location.replace("/");
  }
}

import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";
import { readPosts } from "../../api/post/read";

// Protects the route, ensuring only authenticated users can access it
authGuard();

const logOutBtn = document.getElementById("log-out-btn");

// Attaches a click event to the logout button
logOutBtn.addEventListener("click", onLogout);

// Lists 12 posts on the homepage
readPosts();

/**
 * Checks if the user is logged in by verifying the presence of a token in localStorage.
 * If the user is logged in, hides the login and register buttons by setting their opacity to 0.
 *
 * @function checkIfLoggedIn
 * @returns {void} Modifies the DOM to reflect the user's logged-in status.
 */
function checkIfLoggedIn() {
    if (localStorage.token) {
        document.getElementById("log-in-register-btn").style.opacity = 0;
    }
}

// Calls the function to check if the user is logged in
checkIfLoggedIn();

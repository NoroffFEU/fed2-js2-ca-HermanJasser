import { API_KEY, API_SOCIAL_POSTS } from "../constants";

/**
 * Deletes a social media post by sending a DELETE request to the API.
 *
 * @async
 * @function deletePost
 * @param {string} id - The unique ID of the post to be deleted.
 * @throws Will throw an error if the deletion fails.
 * @returns {Promise<void>} Reloads the page after the post is successfully deleted.
 */
export async function deletePost(id) {
    try {
        // Get the access token from localStorage
        let accessToken = localStorage.getItem("token");

        // Options for the fetch request
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Noroff-API-Key": API_KEY,
            },
        };

        // Send the delete request to the API
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);

        // Reload the page after successful deletion
        window.location.reload();
    } catch (error) {
        // Notify the user if the deletion fails
        alert("Kan ikke slette. Prøv igjen senere"); // Translation: "Can't delete. Try again later."
        console.error(error.message);
    }
}


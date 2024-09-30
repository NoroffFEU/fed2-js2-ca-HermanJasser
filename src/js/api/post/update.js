import { API_KEY, API_SOCIAL_POSTS } from "../constants";
import { id } from "../../router/views/postEdit";

const editPostForm = document.getElementById("edit-post-form");

/**
 * Fetches the post data for a specific post by ID and populates the edit form with the current values.
 *
 * @async
 * @function getEditPostFormValue
 * @param {string} id - The unique ID of the post to edit.
 * @throws Will throw an error if the fetch request fails.
 * @returns {Promise<void>} Populates the edit form fields with the current post data.
 */
export async function getEditPostFormValue(id) {
    try {
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "X-Noroff-API-Key": API_KEY,
            },
        };

        // Fetch the post by ID
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);

        // Check if the response is ok, otherwise throw an error
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

        const data = await response.json();
        const postApi = data.data;

        // Populate the form fields with the post data
        editPostForm.title.value = postApi.title;
        editPostForm.content.value = postApi.body;
        editPostForm.url.value = postApi.media.url;
        editPostForm.alt.value = postApi.media.alt;
    } catch (error) {
        // Handle the error and redirect if editing fails
        alert(`Can't edit this post. Try again later.`);
        window.location = "/profile/";
    }
}

/**
 * Updates the post with new values by sending a PUT request to the API.
 *
 * @async
 * @function updatePost
 * @param {string} title - The updated title of the post.
 * @param {string} content - The updated body content of the post.
 * @param {string} url - The updated URL of the media associated with the post.
 * @param {string} alt - The updated alternative text for the media.
 * @throws Will throw an error if the update request fails.
 * @returns {Promise<void>} Redirects the user to the profile page after successfully updating the post.
 */
export async function updatePost(title, content, url, alt) {
    try {
        // Get the access token from localStorage
        let accessToken = localStorage.getItem("token");

        // Options for the fetch request
        const options = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Noroff-API-Key": API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: content,
                media: {
                    url: url,
                    alt: alt,
                },
            }),
        };

        // Send the update request
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);

        // If the response is not ok, throw an error
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Log the update and redirect to the profile page
        console.log("Post updated");
        window.location = "/profile/";
    } catch (error) {
        // Handle errors during the update process
        alert("Can't edit post");
    }
}

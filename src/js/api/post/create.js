import { API_KEY, API_SOCIAL_POSTS } from "../constants";

/**
 * Creates a social media post by sending the post details to the API.
 *
 * @async
 * @function createPost
 * @param {string} title - The title of the post.
 * @param {string} content - The main body/content of the post.
 * @param {string} url - The URL of the media associated with the post.
 * @param {string} alt - The alternative text for the media.
 * @throws Will throw an error if the post creation fails.
 * @returns {Promise<void>} Redirects the user to the profile page on successful post creation.
 */
export async function createPost(title, content, url, alt) {
    try {
        // Get the access token from localStorage
        let accessToken = localStorage.getItem("token");

        // Options for the fetch request
        const options = {
            method: "POST",
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

        // Send the post creation request
        const response = await fetch(API_SOCIAL_POSTS, options);

        // If the response is not ok, throw an error
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Redirect the user to the profile page after successful post creation
        window.location = "/profile/";
    } catch (error) {
        // Notify the user if the post creation fails
        alert("Can't create post");
        console.error(error.message);
    }
}


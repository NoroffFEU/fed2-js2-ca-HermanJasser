import { API_KEY, API_SOCIAL_POSTS } from "../constants";
const singlePostDiv = document.getElementById("single-post-div");

/**
 * Fetches a single post from the API using the provided post ID and displays it on the page.
 *
 * @async
 * @function getSinglePost
 * @param {string} id - The unique ID of the post to fetch.
 * @throws Will throw an error if the fetch request fails or if the post is not found.
 * @returns {Promise<void>} Updates the DOM with the details of the single post.
 */
export async function getSinglePost(id) {
    try {
        // Options for the fetch request
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "X-Noroff-API-Key": API_KEY,
            },
        };

        // Fetch the single post from the API
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}/`, options);

        // Check if the response is ok, otherwise throw an error
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

        // Parse the response data
        const data = await response.json();
        const postsApi = data.data;

        // Display the fetched post
        showSinglePost(postsApi);
    } catch (error) {
        // Log the error and display a message if the post is not found
        console.error("Error message: " + error);
        singlePostDiv.innerHTML = "<h2>Did not find the post</h2>";
    }
}

/**
 * Renders a single post fetched from the API and displays it in the DOM.
 *
 * @async
 * @function showSinglePost
 * @param {Object} api - The post object fetched from the API.
 * @returns {void} Populates the single post container with the post details.
 */
async function showSinglePost(api) {
    singlePostDiv.innerHTML = "";

    // Default to a placeholder image if media is not available
    let mediaUrl = api.media && api.media.url 
        ? api.media.url 
        : 'https://raw.githubusercontent.com/HermanJasser/folder-for-images/3fed7422fa0abc67ac78fbedf6bf1c87f61b47ea/img/Placeholder-_-Glossary.svg';

    let mediaAlt = api.media && api.media.alt 
        ? api.media.alt 
        : 'Placeholder image';

    let bodyContent = api.body ? api.body : '';

    // Create the HTML content for the single post
    singlePostDiv.innerHTML = `
        <h2>${api.title}</h2>
        <img src="${mediaUrl}" alt="${mediaAlt}">
        <p>${bodyContent}</p>
    `;
}





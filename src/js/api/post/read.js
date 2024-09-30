import { API_KEY, API_SOCIAL_POSTS } from "../constants";

const postCont = document.getElementById("post-cont");

/**
 * Fetches and reads posts from the API and lists them on the page.
 *
 * @async
 * @function readPosts
 * @throws Will throw an error if the fetch request fails or if there are no posts found.
 * @returns {Promise<void>} Updates the DOM with a list of posts or displays an error message.
 */
export async function readPosts() {
    try {
        // Options for the fetch request
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "X-Noroff-API-Key": API_KEY,
            },
        };

        // Fetch the posts from the API
        const response = await fetch(API_SOCIAL_POSTS, options);

        // Check if the response is ok, otherwise throw an error
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

        // Parse the response data
        const data = await response.json();
        const postsApi = data.data;

        // List the fetched posts
        listPosts(postsApi);
    } catch (error) {
        // Log the error and display a message if no posts are found
        console.error("Error message: " + error);
        postCont.innerHTML = "<h2>Did not find any posts</h2>";
    }
}

/**
 * Renders a list of posts from the API and displays them in the DOM.
 *
 * @function listPosts
 * @param {Array<Object>} api - The array of post objects fetched from the API.
 * @returns {void} Populates the post container with the list of posts.
 */
function listPosts(api) {
    postCont.innerHTML = "";
    let cont = "";

    // Loop through the posts and limit to 12 items
    for (let i = 0; i < 12 && i < api.length; i++) {
        // Default to a placeholder image if media is not available
        let mediaUrl = api[i].media && api[i].media.url 
            ? api[i].media.url 
            : 'https://raw.githubusercontent.com/HermanJasser/folder-for-images/3fed7422fa0abc67ac78fbedf6bf1c87f61b47ea/img/Placeholder-_-Glossary.svg';

        let mediaAlt = api[i].media && api[i].media.alt 
            ? api[i].media.alt 
            : 'Placeholder image';

        let bodyContent = api[i].body ? api[i].body : '';

        // Create the HTML content for each post
        cont += `
        <a href="/post/?id=${api[i].id}">
            <div>
                <h2>${api[i].title}</h2>
                <img src="${mediaUrl}" alt="${mediaAlt}">
                <p>${bodyContent}</p>
            </div>
        </a>
        `;
    }

    // Inject the posts into the container
    postCont.innerHTML = cont;
}

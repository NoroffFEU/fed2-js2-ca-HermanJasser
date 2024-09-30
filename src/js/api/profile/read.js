import { API_KEY, API_SOCIAL_PROFILES } from "../constants";
import { DeleteBtnListener } from "../../ui/post/delete";

const myPostCont = document.getElementById("my-posts-cont");

/**
 * Fetches the authenticated user's posts and displays them on the page.
 *
 * @async
 * @function getMyPosts
 * @throws Will throw an error if the fetch request fails.
 * @returns {Promise<void>} Updates the DOM with the user's posts or displays an error message.
 */
export async function getMyPosts() {
    try {
        // Options for the fetch request
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "X-Noroff-API-Key": API_KEY,
            },
        };

        const username = localStorage.username;

        // Fetch the user's posts from the API
        const response = await fetch(`${API_SOCIAL_PROFILES}/${username}/posts`, options);

        // Check if the response is ok, otherwise throw an error
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);

        // Parse the response data
        const data = await response.json();
        const postsApi = data.data;

        // Display the user's posts
        listMyPosts(postsApi);
    } catch (error) {
        // Log the error and display a message if no posts are found
        console.error("Error message: " + error);
        myPostCont.innerHTML = "<h2>Did not find any posts</h2>";
    }
}

/**
 * Renders the user's posts fetched from the API and displays them in the DOM.
 *
 * @function listMyPosts
 * @param {Array<Object>} api - The array of post objects fetched from the API.
 * @returns {void} Populates the post container with the user's posts.
 */
function listMyPosts(api) {
    myPostCont.innerHTML = "";
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
        <div>
            <h2>${api[i].title}</h2> 
            <img src="${mediaUrl}" alt="${mediaAlt}">
            <p>${bodyContent}</p>
            <a href="/post/edit/?id=${api[i].id}">Edit post</a>
            <button id="${api[i].id}">Slett</button>
        </div>
        `;
    }

    // Inject the posts into the container
    myPostCont.innerHTML = cont;

    // Add a delete button listener for each post
    api.forEach((i) => {
        DeleteBtnListener(i.id);
    });
}



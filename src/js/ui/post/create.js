import { createPost } from "../../api/post/create";

const creatPostFrom = document.getElementById("create-post");

/**
 * Handles the post creation form submission by preventing the default form action,
 * retrieving the title, content, URL, and alt text from the form, and invoking the createPost function.
 *
 * @async
 * @function onCreatePost
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} Invokes the post creation process.
 */
export async function onCreatePost(event) {
    event.preventDefault();

    // Trim input values to remove excess whitespace
    const title = creatPostFrom.title.value.trim();
    const content = creatPostFrom.content.value.trim();
    const url = creatPostFrom.url.value.trim();
    const alt = creatPostFrom.alt.value.trim();

    // Call the createPost function with the provided data
    createPost(title, content, url, alt);
}


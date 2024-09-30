import { updatePost } from "../../api/post/update";

const editPostForm = document.getElementById("edit-post-form");

/**
 * Handles the post update form submission by preventing the default form action,
 * retrieving the title, content, URL, and alt text from the form, and invoking the updatePost function.
 *
 * @async
 * @function onUpdatePost
 * @param {Event} event - The form submit event.
 * @returns {Promise<void>} Invokes the post update process.
 */
export async function onUpdatePost(event) {
    event.preventDefault();

    // Retrieve values from the form
    const title = editPostForm.title.value;
    const content = editPostForm.content.value;
    const url = editPostForm.url.value;
    const alt = editPostForm.alt.value;

    // Call the updatePost function with the provided data
    updatePost(title, content, url, alt);
}


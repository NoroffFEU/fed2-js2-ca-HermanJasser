import { deletePost } from "../../api/post/delete";

/**
 * Attaches a click event listener to the delete button associated with the specified post ID.
 * When the button is clicked, it invokes the deletePost function to delete the corresponding post.
 *
 * @function DeleteBtnListener
 * @param {string} id - The ID of the post to be deleted.
 * @returns {void} Attaches the event listener for the delete action.
 */
export function DeleteBtnListener(id) {
    let deleter = document.getElementById(id);
    deleter.addEventListener("click", () => {
        deletePost(id);
        //console.log(id);
    });
}

import { updatePost } from "../../api/post/update";

const editPostForm = document.getElementById("edit-post-form");

export async function onUpdatePost(event) {
    event.preventDefault();

        const title = editPostForm.title.value;
        const content = editPostForm.content.value;
        const url = editPostForm.url.value;
        const alt = editPostForm.alt.value;

        //console.log(title, content, url, alt);
        updatePost(title, content, url, alt)
}

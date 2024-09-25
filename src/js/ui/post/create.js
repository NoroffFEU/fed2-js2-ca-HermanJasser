import { createPost } from "../../api/post/create";

const creatPostFrom = document.getElementById("create-post");

export async function onCreatePost(event) {
    event.preventDefault();

    const title = creatPostFrom.title.value.trim();
    const content = creatPostFrom.content.value.trim();
    const  url = creatPostFrom.url.value.trim();
    const  alt = creatPostFrom.alt.value.trim();

    //console.log(title, content, url, alt);
    createPost(title, content, url, alt);

}

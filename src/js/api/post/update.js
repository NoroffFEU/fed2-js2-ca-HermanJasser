import { API_KEY } from "../constants";
import { id } from "../../router/views/postEdit";

const editPostForm = document.getElementById("edit-post-form");

export async function getEditPostFormValue(id) {
    try{
            const options = {
                headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                  "X-Noroff-API-Key": API_KEY
                }
              };

        const username = localStorage.username;
        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, options);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        const postApi = data.data;

        editPostForm.title.value = postApi.title;
        editPostForm.content.value = postApi.body;
        editPostForm.url.value = postApi.media.url;
        editPostForm.alt.value = postApi.media.alt;
    } 
    catch{
        alert(`Cant edit this post. Try again later`);
        window.location = "/profile/";
    }

}

export async function updatePost(title, content, url, alt){
    try {
        let accessToken = localStorage.getItem("token");
        const options = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Noroff-API-Key": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "body": content,
                "media": {
                    "url": url,
                    "alt": alt
                }
            }),
        };

        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("post oppdatert")
        window.location = "/profile/";
    } catch (error) {
        alert("Cant edit post")
    }
}


import { API_KEY, API_SOCIAL_PROFILES } from "../constants";
import { DeleteBtnListener } from "../../ui/post/delete";

//export async function readProfile(username) {}

const myPostCont = document.getElementById("my-posts-cont");



export async function getMyPosts() {
    try{
            const options = {
                headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                  "X-Noroff-API-Key": API_KEY
                }
              };

        const username = localStorage.username;
        const response = await fetch(`${API_SOCIAL_PROFILES}/${username}/posts`, options);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        const postsApi = data.data;
        listMyPosts(postsApi)

    } catch (error){
        console.error("Error message: " + error)
        myPostCont.innerHTML = "<h2>Did not find any posts</h2>"
    }
}

function listMyPosts(api){
    myPostCont.innerHTML = "";
    let cont = "";
    
    for (let i = 0; i < 12 && i < api.length; i++) {
        let mediaUrl = api[i].media && api[i].media.url ? api[i].media.url : 'https://raw.githubusercontent.com/HermanJasser/folder-for-images/3fed7422fa0abc67ac78fbedf6bf1c87f61b47ea/img/Placeholder-_-Glossary.svg';
        let mediaAlt = api[i].media && api[i].media.alt ? api[i].media.alt : 'Placeholder image';
        let bodyContent = api[i].body ? api[i].body : '';

        cont += `<div>
        <h2>${api[i].title}</h2> 
        <img src="${mediaUrl}" alt="${mediaAlt}">
        <p>${bodyContent}</p>
        <a href="/post/edit/?id=${api[i].id}">Edit post</a>
        <button id="${api[i].id}">Slett</button>
        </div>
        `;
    }
    myPostCont.innerHTML = cont;

    api.forEach((i) => {
        DeleteBtnListener(i.id);
      });
}


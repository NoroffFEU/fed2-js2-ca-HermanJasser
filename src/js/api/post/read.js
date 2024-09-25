import { API_KEY, API_SOCIAL_POSTS } from "../constants";
//export async function readPost(id) {}


const postCont = document.getElementById("post-cont");


export async function readPosts() {
    try{
            const options = {
                headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                  "X-Noroff-API-Key": API_KEY
                }
              };
        const response = await fetch(API_SOCIAL_POSTS, options);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        const postsApi = data.data;
        //console.log(postsApi);
        listPosts(postsApi)

    } catch (error){
        console.error("Error message: " + error)
        postCont.innerHTML = "<h2>did not find any posts</h2>"
    }
}

function listPosts(api){
    postCont.innerHTML = "";
    let cont = "";
    
    for (let i = 0; i < 12 && i < api.length; i++) {
        let mediaUrl = api[i].media && api[i].media.url ? api[i].media.url : 'https://raw.githubusercontent.com/HermanJasser/folder-for-images/3fed7422fa0abc67ac78fbedf6bf1c87f61b47ea/img/Placeholder-_-Glossary.svg';
        let mediaAlt = api[i].media && api[i].media.alt ? api[i].media.alt : 'Placeholder image';
        let bodyContent = api[i].body ? api[i].body : '';

        cont += `<div>
        <h2>${api[i].title}</h2> 
        <img src="${mediaUrl}" alt="${mediaAlt}">
        <p>${bodyContent}</p>
        </div>
        `;
    }
    postCont.innerHTML = cont;
}


//export async function readPostsByUser(username, limit = 12, page = 1, tag) {}

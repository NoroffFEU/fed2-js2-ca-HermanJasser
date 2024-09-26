import { API_KEY, API_SOCIAL_POSTS } from "../constants";
const singlePostDiv = document.getElementById("single-post-div");


export async function getSinglePost(id){
    try{
        const options = {
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
              "X-Noroff-API-Key": API_KEY
            }
          };
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}/`, options);
    if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
    const data = await response.json();
    const postsApi = data.data;
          console.log(postsApi);
          showSinglePost(postsApi)

} catch (error){
    console.error("Error message: " + error)
    myPostCont.innerHTML = "<h2>Did not find the post</h2>"
}
}


async function showSinglePost(api){
    singlePostDiv.innerHTML = "";

        let mediaUrl = api.media && api.media.url ? api.media.url : 'https://raw.githubusercontent.com/HermanJasser/folder-for-images/3fed7422fa0abc67ac78fbedf6bf1c87f61b47ea/img/Placeholder-_-Glossary.svg';
        let mediaAlt = api.media && api.media.alt ? api.media.alt : 'Placeholder image';
        let bodyContent = api.body ? api.body : '';

        singlePostDiv.innerHTML = `
        <h2>${api.title}</h2> 
        <img src="${mediaUrl}" alt="${mediaAlt}">
        <p>${bodyContent}</p>
        `;
    }




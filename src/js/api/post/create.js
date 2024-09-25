import { API_KEY, API_SOCIAL_POSTS } from "../constants";

export async function createPost( title, content, url, alt ) {
    try {
        let accessToken = localStorage.getItem("token");
        const options = {
            method: "POST",
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

        const response = await fetch(API_SOCIAL_POSTS, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        //console.log("post laget")
        window.location = "/profile/";
    } catch (error) {
        alert("Cant create post")
    }

}

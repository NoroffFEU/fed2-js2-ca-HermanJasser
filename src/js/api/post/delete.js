import { API_KEY, API_SOCIAL_POSTS } from "../constants";

export async function deletePost(id) {
    try {
        let accessToken = localStorage.getItem("token");
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Noroff-API-Key": API_KEY,   
            }
        };

        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, options);

        window.location.reload();
    } catch (error) {
        alert("kan ikke slette. Prøv igjen senere")
        console.error(error.message)
    }
}

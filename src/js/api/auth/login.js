import { API_AUTH_LOGIN } from "../constants";

export async function login(email, password) {
    try {
       
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        };
        const response = await fetch(API_AUTH_LOGIN, options); 
        if (response.ok){
            const data = await response.json();
            //console.log(data.data.accessToken);
            //console.log(data.data.name);
            console.log(data);
            localStorage.setItem("username", data.data.name);
            localStorage.setItem("token", data.data.accessToken);
                location="/";
                location.href="/";
                location.assign("/");
                location.replace("/");

        } else {
            
            throw new Error(response.statusText);
            
        }
    } catch (error) {
        window.alert("Feil Email eller passord");
        console.error(error.message);
        
        /*const alert = document.getElementById("alert-login");
        alert.innerText = "";
        alert.innerText = "Feil Email eller passord";*/
    }
}

//this checks if you are logged in or not

import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";
import { readPosts } from "../../api/post/read";

authGuard();


const logOutBtn = document.getElementById("log-out-btn");

logOutBtn.addEventListener("click", onLogout);

//this is going to list 12 posts on the home page
readPosts();

function checkIfLoggedIn(){
    if(localStorage.token){
        document.getElementById("log-in-register-btn").style.opacity = 0;
     }
}

checkIfLoggedIn();
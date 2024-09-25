export function authGuard() {
  if (!localStorage.token) {
    alert("You must be logged in to view this page");
    window.location.href = "/auth/login/";
  } else if(localStorage.token){
   // document.getElementById("log-in-register-btn").style.display = "none";

  }

}



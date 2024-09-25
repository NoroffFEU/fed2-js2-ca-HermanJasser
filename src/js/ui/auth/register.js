import { postRegisterInfo } from "../../api/auth/register";
const registerForm = document.getElementById("register");

export async function onRegister(event) {
    event.preventDefault();
    const name = registerForm.name.value.trim();
    const email = registerForm.email.value.trim();
    const password = registerForm.password.value.trim();
    //console.log(name, email, password)
    postRegisterInfo(name, email, password);
    
}


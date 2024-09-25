import { login } from "../../api/auth/login";

const loginForm = document.getElementById("login")

export async function onLogin(event) {
    event.preventDefault();
    const email = loginForm.email.value.trim()
    const password = loginForm.password.value.trim()

    login(email, password);
}

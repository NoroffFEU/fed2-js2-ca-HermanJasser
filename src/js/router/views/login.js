import { onLogin } from "../../ui/auth/login";
import { isLoggedIn } from "../../utilities/loggedIn";

isLoggedIn();

const form = document.forms.login;

form.addEventListener("submit", onLogin);

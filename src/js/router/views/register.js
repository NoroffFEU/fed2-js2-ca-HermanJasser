import { onRegister } from "../../ui/auth/register";
import { isLoggedIn } from "../../utilities/loggedIn";

isLoggedIn();

export const form = document.forms.register;

form.addEventListener("submit", onRegister);

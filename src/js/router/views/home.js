import { authGuard } from "../../utilities/authGuard";
import { onLogout } from "../../ui/auth/logout";

authGuard();

const logOutBtn = document.getElementById("log-out-btn");

logOutBtn.addEventListener("click", onLogout);


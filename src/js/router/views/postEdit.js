import { authGuard } from "../../utilities/authGuard";
import { getEditPostFormValue } from "../../api/post/update";
import { onUpdatePost } from "../../ui/post/update";

authGuard();


let params = new URL(document.location).searchParams;
export let id = params.get("id");


getEditPostFormValue(id);

const form = document.forms.editPost;

form.addEventListener("submit", onUpdatePost);
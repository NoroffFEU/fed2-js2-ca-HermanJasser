import { deletePost } from "../../api/post/delete";
//export async function onDeletePost(event) {}

export function DeleteBtnListener(id) {
    let deleter = document.getElementById(id);
    deleter.addEventListener("click", () => {
        deletePost(id);
        //console.log(id)
    });
  }
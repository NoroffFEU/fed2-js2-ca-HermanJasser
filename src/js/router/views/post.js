//alert("Single Post Page");
import { getSinglePost } from "../../api/post/single";

let params = new URL(document.location).searchParams;
export let id = params.get("id");

getSinglePost(id);


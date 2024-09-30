import { authGuard } from "../../utilities/authGuard";
import { getMyPosts } from "../../api/profile/read";


authGuard();

getMyPosts();


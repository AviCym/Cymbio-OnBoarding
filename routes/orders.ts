import router from "./root";
import { order } from "../controllers/postOrder";

router.post('/post', order);

export default router;
import { createDB } from "../db/setup-db";
import router from "./root";

router.get('/create-db', createDB)

export default router;
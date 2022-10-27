import router from "./root";
import { getOrderById, getOrderFromQueue, pushOrderToQueue } from "../controllers/orders";


router.get('/orders/:id',getOrderById);
router.get('/orders/queue/receive',getOrderFromQueue);
router.post('/orders/queue/send', pushOrderToQueue);

export default router;
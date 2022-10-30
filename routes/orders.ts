import router from "./root";
import { getAllOrders, getOrderById, getOrderFromQueue, pushOrderToQueue } from "../controllers/orders";

router.get('/orders',getAllOrders)
router.get('/orders/:id',getOrderById);
router.get('/orders/queue/receive',getOrderFromQueue);
router.post('/orders/queue/send', pushOrderToQueue);

export default router;
import test, { describe, it } from 'node:test';
import Queue from '../middlewares/rabbitmq/queue.rabbitmq'
import {pushOrderToQueue, getAllOrdersFromDB} from '../controllers/orders'

const testQueue = new Queue('testOrders');
testQueue.consumer();

describe('test-order-from-queue-to-db', () => {
    it('should push orders to queue', async () => {
        const checkBefore = await testQueue.checkQueue();
        pushOrderToQueue(orderDummy);
        const checkAfter = await testQueue.checkQueue();
        console.log(checkBefore);
    });
});



import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import orders from './routes/orders';
import root from './routes/root';
import setupDB from './db/setup-db';
import Queue from './middlewares/rabbitmq/queue.rabbitmq';

dotenv.config();
const PORT = +process.env.PORT! || 5050

setupDB();
const ordersQueue= new Queue('orders');
ordersQueue.consumer()
export const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', root)
app.use('/orders', orders );


app.listen(PORT, () => console.log("SERVER IS UP AND RUNNING ON PORT ", PORT))
  .on("error", (err) => console.log('Error', err));
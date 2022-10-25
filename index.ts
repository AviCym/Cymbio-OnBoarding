import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import orders from './routes/orders';
import root from './routes/root';
import { createDB } from './db';
import amqpSender from './middlewares/rabbitmq/sender';

dotenv.config();
const PORT = +process.env.PORT! || 5050

export const app = express();

app.get('/db', createDB )

app.use(express.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', root)
app.use('/orders', orders );
amqpSender();

app.listen(PORT, () => console.log("SERVER IS UP AND RUNNING ON PORT ", PORT))
  .on("error", (err) => console.log('Error', err));
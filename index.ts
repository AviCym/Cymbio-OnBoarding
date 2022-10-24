import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
// import path,{dirname} from 'path';
import bodyParser from 'body-parser';
import orders from './routes/orders';
import root from './routes/root';
import mysql from 'mysql'
import { error } from 'console';
import { createDB } from './db';

dotenv.config();
const PORT = +process.env.PORT! || 5050





export const app = express();

app.get('/db', createDB )

app.use(express.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', root)
app.use('/orders', orders );


app.listen(PORT, () => console.log("SERVER IS UP AND RUNNING ON PORT ", PORT))
  .on("error", (err) => console.log('Error', err));
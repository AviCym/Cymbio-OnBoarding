import mysql from 'mysql';
import { app } from '.';

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'CymbioTempENV'
})

DB.connect((err:any) => {
    if(err) {
        throw err;
    }
    console.log('Connected to MySql');
})

export const createDB = (req:any, res:any) => {
    let sql = 'CREATE DATABASE CymbioTempENV';
    DB.query(sql, (err:any, result) => {
        if(err) throw err;
        console.log(result);
        res.send('DataBase has been created');
    })
}

// app.get('createOrdersTable', (req, res) => {
//     let sql = 'CREATE TABLE orders(type VARCHAR(255), retailer_order_id int AUTO_INCREMENT, order_lines )'
// })
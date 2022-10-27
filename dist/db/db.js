"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDB = void 0;
const mysql_1 = __importDefault(require("mysql"));
const DB = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'CymbioTempENV'
});
DB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySql');
});
const createDB = (req, res) => {
    let sql = 'CREATE DATABASE CymbioTempENV';
    DB.query(sql, (err, result) => {
        if (err)
            throw err;
        console.log(result);
        res.send('DataBase has been created');
    });
};
exports.createDB = createDB;
// app.get('createOrdersTable', (req, res) => {
//     let sql = 'CREATE TABLE orders(type VARCHAR(255), retailer_order_id int AUTO_INCREMENT, order_lines )'
// })
// })
// })
//# sourceMappingURL=db.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDB = void 0;
const mysql_1 = __importDefault(require("mysql"));
const knex_1 = require("knex");
const knexfile_1 = __importDefault(require("./knexfile"));
const objection_1 = require("objection");
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
const createDB = async (req, res) => {
    const sql = 'CREATE DATABASE CymbioTempENV';
    DB.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        ;
        console.log(result);
        res.send('DataBase has been created');
    });
};
exports.createDB = createDB;
const setupDB = () => {
    const db = (0, knex_1.knex)(knexfile_1.default.development);
    objection_1.Model.knex(db);
    console.log("trying setupDB");
};
exports.default = setupDB;
//# sourceMappingURL=setup-db.js.map
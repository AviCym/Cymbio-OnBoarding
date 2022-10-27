import mysql from 'mysql';
import {knex} from "knex";
import knexfile from './knexfile';
import { Model } from "objection";

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'CymbioTempENV'
});

DB.connect((err:any) => {
    if(err) {
        throw err;
    }
    console.log('Connected to MySql');
});


export const createDB = async (req:any, res:any) => {
    const sql = 'CREATE DATABASE CymbioTempENV';
    DB.query(sql, (err:any, result:any) => {
        if(err) {
            throw err
        };
        console.log(result);
        res.send('DataBase has been created');
    })
}

const setupDB = ():void => {
    const db = knex(knexfile.development);
    Model.knex(db);
    console.log("trying setupDB");
}

export default setupDB;
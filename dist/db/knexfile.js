"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const {knexSnakeCaseMappers} = require('objection');
const objection_1 = __importDefault(require("objection"));
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexFile = {
    development: {
        client: 'mysql2',
        connection: {
            database: 'CymbioTempENV',
            user: 'root',
            password: 'pass'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds'
        },
        ...objection_1.default,
    },
};
exports.default = knexFile;
//# sourceMappingURL=knexfile.js.map
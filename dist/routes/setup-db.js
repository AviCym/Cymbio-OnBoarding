"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setup_db_1 = require("../db/setup-db");
const root_1 = __importDefault(require("./root"));
root_1.default.get('/create-db', setup_db_1.createDB);
exports.default = root_1.default;
//# sourceMappingURL=setup-db.js.map
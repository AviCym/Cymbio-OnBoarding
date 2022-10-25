"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const orders_1 = __importDefault(require("./routes/orders"));
const root_1 = __importDefault(require("./routes/root"));
const db_1 = require("./db");
const sender_1 = __importDefault(require("./middlewares/rabbitmq/sender"));
dotenv_1.default.config();
const PORT = +process.env.PORT || 5050;
exports.app = (0, express_1.default)();
exports.app.get('/db', db_1.createDB);
exports.app.use(express_1.default.json({ limit: "30mb" }));
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.app.use('/', root_1.default);
exports.app.use('/orders', orders_1.default);
(0, sender_1.default)();
exports.app.listen(PORT, () => console.log("SERVER IS UP AND RUNNING ON PORT ", PORT))
    .on("error", (err) => console.log('Error', err));
//# sourceMappingURL=index.js.map
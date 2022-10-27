"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const root_1 = __importDefault(require("./root"));
const orders_1 = require("../controllers/orders");
root_1.default.get('/orders/:id', orders_1.getOrderById);
root_1.default.get('/orders/queue', orders_1.getOrderFromQueue);
root_1.default.post('/orders/queue', orders_1.pushOrderToQueue);
exports.default = root_1.default;
//# sourceMappingURL=orders.js.map
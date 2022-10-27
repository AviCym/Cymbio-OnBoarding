"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const sender_1 = __importDefault(require("../middlewares/rabbitmq/sender"));
const ordersSender = new sender_1.default("orders");
const order = async (req, res) => {
    try {
        const receivedOrder = JSON.stringify(req.body);
        // sender.orderSender(receivedOrder);
        ordersSender.amqpSender(receivedOrder);
        res.status(201).json(receivedOrder);
        console.log(req.body);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};
exports.order = order;
//# sourceMappingURL=postOrder.js.map
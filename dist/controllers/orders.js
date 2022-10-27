"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.getOrderFromQueue = exports.pushOrderToQueue = void 0;
const orders_1 = __importDefault(require("../db/models/orders"));
const sender_1 = __importDefault(require("../middlewares/rabbitmq/sender"));
const receiver_1 = __importDefault(require("../middlewares/rabbitmq/receiver"));
const ordersSender = new sender_1.default("orders");
const orderReceiver = new receiver_1.default("orders");
const pushOrderToQueue = async (req, res) => {
    try {
        const receivedOrder = JSON.stringify(req.body);
        await ordersSender.amqpSender(receivedOrder);
        res.status(201).json(receivedOrder);
        console.log("order", req.body);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};
exports.pushOrderToQueue = pushOrderToQueue;
const getOrderFromQueue = async (req, res) => {
    console.log('trying to get order from queue');
    try {
        const receivedOrder = orderReceiver.amqpReceiver();
        res.status(201).json(receivedOrder);
        console.log(receivedOrder);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};
exports.getOrderFromQueue = getOrderFromQueue;
const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orders_1.default.query().findById(id).withGraphFetched('order_lines');
        res.json(order);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.getOrderById = getOrderById;
//# sourceMappingURL=orders.js.map
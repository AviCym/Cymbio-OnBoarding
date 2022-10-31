"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = exports.getOrderById = exports.getOrderFromQueue = exports.pushOrderToQueue = void 0;
const orders_1 = __importDefault(require("../db/models/orders"));
const queue_rabbitmq_1 = __importDefault(require("../middlewares/rabbitmq/queue.rabbitmq"));
const ordersQueue = new queue_rabbitmq_1.default("orders");
const pushOrderToQueue = async (req, res) => {
    try {
        const receivedOrder = req.body;
        ordersQueue.producer(receivedOrder);
        res.status(201).json({ receivedOrder: receivedOrder });
    }
    catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
};
exports.pushOrderToQueue = pushOrderToQueue;
const getOrderFromQueue = async (req, res) => {
    console.log('trying to get order from queue');
    try {
        const receivedOrder = ordersQueue.consumeOne();
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
        res.status(201).json(order);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.getOrderById = getOrderById;
const getAllOrders = async (req, res) => {
    try {
        const orders = await orders_1.default.query().withGraphFetched('[order_lines, order_lines.notes]');
        res.status(201).json(orders);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
exports.getAllOrders = getAllOrders;
//# sourceMappingURL=orders.js.map
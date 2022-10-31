import Orders from "../db/models/orders";
import { Request, Response } from "express";
import Queue from "../middlewares/rabbitmq/queue.rabbitmq";

const ordersQueue = new Queue("orders");

export const pushOrderToQueue = async (req:Request, res:Response) => {
    try {
        const receivedOrder:string = req.body;
        ordersQueue.producer(receivedOrder);
        res.status(201).json({receivedOrder: receivedOrder});
    }
    catch (error:any) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const getOrderFromQueue = async (req:Request, res:Response) => {
    try {
        const receivedOrder = ordersQueue.consumeOne();
        res.status(200).json(receivedOrder);
        console.log(receivedOrder)
    }
    catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const getOrderById = async (req:Request, res:Response) => {
    try{
        const {id} = req.params;
        const order = await Orders.query().findById(id).withGraphFetched('order_lines')
        res.status(200).json(order)
    } catch(err) {
        console.log(err)
        res.status(404).json(err)
    }
  }
  export const getAllOrdersFromDB = async (req:Request, res:Response) => {
    try {
        const orders = await Orders.query().withGraphFetched('[order_lines, order_lines.notes]');
        res.status(200).json(orders);
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
  }
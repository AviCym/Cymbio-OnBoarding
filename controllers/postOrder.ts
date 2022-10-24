import { OrderSchema } from "../models/orderSchema";

export const order = async (req:any, res:any) => {
    try {
        const receivedOrder = req.body;
        // await receivedOrder.save();
        res.status(201).json(receivedOrder);
        console.log(req.body);
    }
    catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}
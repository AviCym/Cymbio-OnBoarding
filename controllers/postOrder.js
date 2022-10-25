"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const order = async (req, res) => {
    try {
        const receivedOrder = req.body;
        // await receivedOrder.save();
        res.status(201).json(receivedOrder);
        console.log(req.body);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
};
exports.order = order;
//# sourceMappingURL=postOrder.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require('amqplib/callback_api');
const amqpSender = () => {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) {
            throw error0.message;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            const queue = 'hello';
            const msg = 'Hello world';
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log("message sent", msg);
        });
        setTimeout(() => {
            connection.close();
            process.exit(0);
        }, 500);
    });
};
exports.default = amqpSender;
//# sourceMappingURL=sender.js.map
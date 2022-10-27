"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const amqp = require('amqplib/callback_api');
// const amqpReceiver =(queueName:string) => {
//     amqp.connect('amqp://localhost', function(error0:any, connection:any) {
//       if (error0) {
//         throw error0;
//       }
//       connection.createChannel((error1:any, channel:any) => {
//         if (error1) {
//           throw error1;
//         }
//         const queue = queueName;
//         channel.assertQueue(queue, {
//           durable: false
//         });
//         console.log(` [*] Waiting for messages in ${queueName}. To exit press CTRL+C`, queue);
//         channel.consume(queue, (msg:any) => {
//             console.log(` [x] Received messages from ${queueName} queue. Content: `, msg.content.toString());
//         }, {
//             noAck: true
//         });
//       });
//     });
// };
class Receiver {
    constructor(queueName) {
        this.queueName = queueName;
    }
    amqpReceiver() {
        amqp.connect('amqp://localhost', (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }
                const queue = this.queueName;
                channel.assertQueue(queue, {
                    durable: false
                });
                console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);
                channel.consume(queue, (msg) => {
                    console.log(` [x] Received messages from ${queue} queue. Content: `, msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    }
}
exports.default = Receiver;
//# sourceMappingURL=receiver.js.map
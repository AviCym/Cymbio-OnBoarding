
const amqp = require('amqplib/callback_api')
import amqp2,{ AmqpConnectionManager, ChannelWrapper } from 'amqp-connection-manager';
import { IAmqpConnectionManager } from 'amqp-connection-manager/dist/esm/AmqpConnectionManager';
import { ConfirmChannel, Connection } from 'amqplib';
// const sender = (queueName:string, message:any,method:any) => {
//     switch (method) {
//         case 'kapkaSender':
//             kapkaSender();
//             break;
//         case 'amqpSender':
//             amqpSender(queueName, message);
//             break;
//     }
// }
// const kapkaSender = ()=>{}

// const amqpSender = (queueName:string, message:any)=>{
//     amqp.connect('amqp://localhost', (error0:any, connection:any) => {
//         if(error0){
//             throw error0.message;
//         };
//         connection.createChannel((error1:any, channel:any)=>{
//             if(error1){
//                 throw error1;
//             };
//             const queue = queueName;
//             const msg =JSON.stringify(message);
//             console.log({queue,msg})
//             channel.assertQueue(queue,{
//                 durable : false
//             });
//             channel.sendToQueue(queue, Buffer.from(msg))
//             console.log(` [x] Message has been sent to ${queueName} queue. Content:`,msg)
//         });
//     });
// };
// export default amqpSender;

// export const amqpConnect = () => {
//     amqp.connect('amqp://localhost',(error0:any, connection:any) => {
//         if(error0){
//             throw error0.message;
//         }
//         connection.createChannel((error1:any, channel:any)=>{
//             if(error1){
//                 throw error1;
//             }
//             console.log('Amqp is up!')
//         });
//     });
// }
export default class Sender {
    queueName:string
    constructor(queueName:string) {
        this.queueName = queueName;
    }

    async amqpSender (message:any) {
        await amqp.connect('amqp://localhost',async (error0:Error, connection:any) => {
            if(error0){
                throw error0.message;
            }
            await connection.createChannel(async (error1:any, channel:any)=>{
                if(error1){
                    throw error1;
                }
                const queue = this.queueName;
                const msg = JSON.stringify(message);
                console.log({queue,msg})
                await channel.assertQueue(queue,{
                    durable : false
                });
                await channel.sendToQueue(queue, Buffer.from(msg))
                console.log(` [x] Message has been sent to ${queue} queue. Content:`,msg)
            });
        });
    }
}

// const orderSender = new orderSender("msg");

// objection knex
// objection (make schemas)
// knex (Crate tables (migration))
// state machin: lib>order>orderStateMachine


// order prossesor
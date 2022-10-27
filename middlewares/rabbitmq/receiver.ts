import { ConfirmChannel, Connection } from 'amqplib';
import Queue from './queue';
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
export default class Receiver extends Queue{
  queueName:string
  constructor(queueName:string) {
    super(queueName);
      this.queueName = queueName;
  }

  amqpReceiver () {
    amqp.connect('amqp://localhost', (error0:any, connection:any) => {
      if (error0) {
        throw error0;
      }
      connection.createChannel((error1:any, channel:any) => {
        if (error1) {
          throw error1;
        }
        const queue:any = this.queueName;
    
        channel.assertQueue(queue, {
          durable: false
        });
        console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);
        channel.get(queue,{noAck:true} ,(err:any,msg:any) => {
        if(msg){
          console.log(` [x] Received messages from ${queue} queue. Content: `, msg.content.toString());
        }    
        else console.log(`Queue is empty`);;
        }, {
            noAck: true
        });
      });
    });
  }
}
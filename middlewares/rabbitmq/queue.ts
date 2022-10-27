import amqp, { AmqpConnectionManager, ChannelWrapper } from 'amqp-connection-manager';
import { ConfirmChannel } from 'amqplib';

export default class Queue {
    queueName: string;
    connection: AmqpConnectionManager
    channelWrapper: ChannelWrapper
    constructor(queueName:any){
        this.queueName = queueName;
        this.connection = amqp.connect(['amqp://localhost']);
        this.channelWrapper = this.connection.createChannel({
            json: true,
            setup: function (channel:ConfirmChannel) {
              // `channel` here is a regular amqplib `ConfirmChannel`.
              // Note that `this` here is the channelWrapper instance.
              return channel.assertQueue('rxQueueName', { durable: true });
            },
          });
    }

    sender (message: string) {
        this.channelWrapper
        .sendToQueue(this.queueName, message)
        .then(function () {
        return console.log('Message was sent!  Hooray!');
        })
        .catch(function (err) {
        return console.log('Message was rejected...  Boo!');
        });
    }
    receiver () {
        this.channelWrapper
        .get(this.queueName,)
        .then(function () {
        return console.log('Message was sent!  Hooray!');
        })
        .catch(function (err) {
        return console.log('Message was rejected...  Boo!');
        });
    }
}







// export default class Queue {
//     private readonly queueName: string;
//     private readonly channelSetupCompletedPromise: Promise<any>;
//     private readonly setupFunctionPromise: (channel: any) => Promise<void>;
//     private readonly channelWrapper: ChannelWrapper;
  
//     private readonly SEND_TICKETS_JOBS_QUEUE_NAME = 'jobs';
  
//     constructor(queueName: string, private connection: AmqpConnectionManager) {
//       this.queueName = queueName;
  
//       let resolveOnSetupCompleted: any;
  
//       this.channelSetupCompletedPromise = new Promise((resolve: any) => {
//         resolveOnSetupCompleted = resolve;
//       });
//       this.setupFunctionPromise = async (channel: any): Promise<void> => {
//         await Promise.all([
//           channel.assertQueue(this.queueName, { durable: true, maxPriority: 10 }),
//           channel.assertExchange(this.queueName, 'topic', { durable: true }),
//           channel.bindQueue(this.queueName, this.queueName, this.queueName),
//         ]);
  
//         resolveOnSetupCompleted();
//       };
  
//       this.channelWrapper = this.connection.createChannel({
//         json: true,
//         setup: (channel: any) => this.setupFunctionPromise(channel),
//       });
  
//       this.channelWrapper.on('error', (err: any) => {
//         throw Error('Channel error: ' + err );
//       });
//     }

// }

// class QueueFactory {
//     private queues: { [key: string]: Queue } = {};
//     private readonly connection: AmqpConnectionManager;
  
//     constructor() {
//       this.connection = amqp.connect('amqp://localhost');
//       this.connection.on('disconnect', (data: any) => {
//         if (data.err) {
//           throw Error('Queue Disconnected with error: '+data.err);
//         }
//       });
  
//       this.connection.on('error', (data: any) => {
//         if (data.err) {
//           throw Error('Queue Disconnected with error: '+data.err);
//         }
//       });
//     }
  
//     of(queueName: string): Queue {
//       if (!this.queues[queueName]) {
//         this.queues[queueName] = new Queue(queueName, this.connection);
//       }
  
//       return this.queues[queueName];
//     }
  
//     async closeAll(): Promise<void> {
//       try {
//         const closePromises = Object.values(this.queues).map((queue: Queue) => queue.close());
//         await Promise.all(closePromises);
//         console.log(`AMQP - Closed all Queues`);
//         await this.connection.close();
//         console.log(`AMQP - Closed connection`);
//       } catch (err) {
//         throw Error(`while closing all Queue connections`+err);
//       }
//     }
//   }
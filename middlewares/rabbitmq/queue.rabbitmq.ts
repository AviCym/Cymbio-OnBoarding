import amqp, { AmqpConnectionManager, ChannelWrapper } from 'amqp-connection-manager';
import { ConfirmChannel } from 'amqplib';
import OrderLines from '../../db/models/order-lines';
import Orders from '../../db/models/orders';

const URL = process.env.RABBIT_URL || 'amqp://localhost'
export default class Queue {
    queueName: string;
    connection: AmqpConnectionManager;
    channelWrapper: ChannelWrapper;
    constructor(queueName:string){
        this.queueName = queueName;
        this.connection = amqp.connect(['amqp://localhost']);
        this.channelWrapper = this.connection.createChannel({
            json: true,
            setup: function (channel:ConfirmChannel) {
              return channel.assertQueue('rxQueueName', { durable: true });
            },
          });
    }
    async checkQueue() {
       return this.channelWrapper.checkQueue(this.queueName)
    }
    async assertQueue() {
        this.channelWrapper.assertQueue(this.queueName);
    }
    async producer (message: string) {
            try {
                await this.assertQueue();
                return await this.channelWrapper.sendToQueue(this.queueName, message);
            }
            catch (error:any) {
                throw Error(error);
            }
    }
    async consumer () {
        await this.channelWrapper.consume(this.queueName,async (message) => {
            try {
                const messageInJSON = await JSON.parse(message.content.toString());
                await Orders.query().insertGraph(messageInJSON)
                await OrderLines.query().insertGraph(messageInJSON.order_lines)
                console.log("Consumer has received the following message: " , JSON.parse(message.content.toString()));
                return message;
            }
            catch (error:any) {
                            throw Error(error);
                        }
        }, {noAck: true});
    }
    async consumeOne () {
        await this.channelWrapper
        .get(this.queueName,{noAck:true})
        .then(function (msg) {
        return console.log('Message was sent!', msg);
        })
        .catch(function (err) {
        return console.log('Message was rejected!');
        });
    }
}

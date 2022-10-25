
const amqp = require('amqplib/callback_api');

const amqpSender = (queueName:string, message:any) => {
    amqp.connect('amqp://localhost', (error0:any, connection:any) => {
        if(error0){
            throw error0.message
        }
        connection.createChannel((error1:any, channel:any)=>{
            if(error1){
                throw error1
            }
            const queue = queueName;
            const msg = message;
            channel.assertQueue(queue,{
                durable : false
            });
            channel.sendToQueue(queue, Buffer.from(msg))
            console.log(` [x] Message has been sent to ${queueName} queue. Content:`,msg)
        });
        setTimeout(() => {
            connection.close();
            process.exit(0)
        }, 500);
    });
}

export default amqpSender;
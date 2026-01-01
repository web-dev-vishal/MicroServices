const amqp = require('amqplib');

async function start() {
    try {
        const connection = await amqp.connect("amqp://rabbitmq");
        const channel = await connection.createChannel();

        await channel.assertQueue("task_created");
        console.log('Notification Service is listening to messages');

        channel.consume("task_created", (msg) => {
            if (msg) {
                const taskData = JSON.parse(msg.content.toString());
                console.log('Notification New Task:', taskData.title);
                console.log('Notification New Task:', taskData);
                channel.ack(msg);
            }
        }, { noAck: false });

    } catch (error) {
        console.log('rabbitMQ Connection Error : ', error.message);
    }
}

start();
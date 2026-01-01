const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/users', {
}).then(() => console.log('Connection to MongoDB successful✅'))
    .catch(err => console.log('MongoDB connection error:❌', err));

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', TaskSchema)

app.get('/tasks', async (req, res) => {
    const task = await Task.find();
    res.json(task)
})

app.post('/tasks', async (req, res) => {
    const { title, description, userId } = req.body;
    
    try {
        const task = new Task({ title, description, userId });
        await task.save();
        
        const message = { taskId: task._id, userId, title };
        
        if (!channel) {
            return res.status(503).json({ error: "RabbitMQ not connected" })
        }
        
        channel.sendToQueue('task_created', Buffer.from(
            JSON.stringify(message)
        ))
        
        res.status(201), res.json(task);
    } catch (error) {
        console.log('Error Message', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Task Service listening on port ${port}`) 
    // connectRabbitMQWithRetry();
})
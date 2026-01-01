const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/users', {
// }).then(() => console.log('Connection to MongoDB successful✅'))
//     .catch(err => console.log('MongoDB connection error:❌', err));

mongoose.connect('mongodb://mongo:27017/users', {
}).then(() => console.log('Connection to MongoDB successful✅'))
    .catch(err => console.log('MongoDB connection error:❌', err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', UserSchema);

app.get('/users', async (req,res) => {
    const users = await User.find();
    res.json(users)
})

app.post("/users", async (req, res) => {
    const { name, email} = req.body;

    try {
        const user = new User({ name, email});
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.log("Error Message", error);
        res.status(500).json({ error: "Intenal server Error"})
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`User Server is listening at http://localhost:3001`);
});
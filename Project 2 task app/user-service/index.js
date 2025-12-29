const express = require('express');
const mongoose = require("mongoose");
const bodyParse = require("body-parser")

const app = express();
const port = 3001;

app.use(bodyParse.json());

mongoose.connect('mongodb://mongodb:27017/users', {
}).then(() => console.log('Connection to MongoDB successful✅'))
    .catch(err => console.log('MongoDB connection error:❌', err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
})

const User = mongoose.model('User', UserSchema)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3001`)
})
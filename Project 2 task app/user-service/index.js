const express = require('express');
const mongoose = require("mongoose");
const bodyParse = require("body-parser")

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
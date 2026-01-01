const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3002;

app.use(bodyParser.json());
const routes = require("./routes");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api", routes);

module.exports = app;
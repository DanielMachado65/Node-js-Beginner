'use strict';
const express = require('express');
const bodyParser = require('body-parser');

//connect MongoDB
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://daniel:teste1234@ds231501.mlab.com:31501/banco-nodejs')

// load models
const Product = require('./models/product');

// load routes
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// recursos
app.use('/',indexRoute);
app.use('/products', productRoute);

module.exports = app;

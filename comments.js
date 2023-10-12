// Create web server

// Import express
const express = require('express');

// Import body-parser
const bodyParser = require('body-parser');

// Import mongoose
const mongoose = require('mongoose');

// Import Comments model
const Comments = require('../models/comments');

// Create express router
const commentRouter = express.Router();

// Use body-parser
commentRouter.use(bodyParser.json());

// Create route for /comments
commentRouter.route('/')
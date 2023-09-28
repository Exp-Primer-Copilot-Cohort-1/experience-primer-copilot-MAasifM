// Create Web Server

// Import Express

const express = require('express');
const app = express();

// Import Body Parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import Cors

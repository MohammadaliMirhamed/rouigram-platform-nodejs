/**
 * add dependency
 */
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
let config = require('./config/config');
let routes = require('./routes');
let app = express();
const database = require('./lib/database');



/**
 * server configuration
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
    // app.set('view engine', 'pug');
    //database.init(app)



/**
 * define routes
 */
app.use('/', routes)



/* run server */
let server = http.createServer(app);
server.listen(config.port);
server.on('listening', () => {
    console.log(`server is running at port : ${config.port}`);
})

module.exports = app;
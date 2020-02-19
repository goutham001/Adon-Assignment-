const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const db = require('./db');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(cors())
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, PATCH');
        next();
    })
app.listen(config.adminer.port, () => {
    var get_connection = db.connectivity(config);
    get_connection.on('error', (err) => {
        console.error(err);
        process.exit(1);
    });
    get_connection.once('open', () => {
        require('./routes')(app);
        console.log(`Server is listening on port ${config.adminer.port}`);
    });
});
module.exports = app;
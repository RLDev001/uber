const dotenv = require('dotenv');
dotenv.config();
const exprees = require('express');
const cors = require('cors');
const app = exprees();
const connectToDb = require('./db/db');

connectToDb();


app.use(cors());


app.get('/', (req, res ) => {
    res.send('Hello world');
})


module.exports = app;

const dotenv = require('dotenv');
dotenv.config();
const exprees = require('express');
const cors = require('cors');
const app = exprees();




app.use(cors());


app.get('/', (req, res ) => {
    res.send('Hello world');
})


module.exports = app;

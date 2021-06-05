// @packages
const cors = require('cors');
const express = require('express');

// @const
const app = express();
const places = require('./places.json');

// @config
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to places API'
    });
});

app.get('/places', (req, res) => {
    res.status(200).json({
        httpStatus: 'OK',
        message: places
    })
});

app.listen(8080, () => {
    console.log('Listening on port', 8080)
});
var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors());

app.use(express.static(__dirname + '/app'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/index.html')) );

app.listen(8080);
console.log('running on 8080');
var apiRouter = require('./routes/api.js');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();


app.use(logger());
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(process.env.PORT || 8000);

console.log('listening on port ', process.env.PORT || 8000);

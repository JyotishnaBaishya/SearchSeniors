var express = require('express');
var app = express();
const expressEjsLayout=require('express-ejs-layouts');
var session = require('express-session');

app.use(session({
	secret: '6797090678597979890',
	resave: true,
	saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

var userRouter = require('./routes/index.js');
app.use('/', userRouter);

app.listen(3000, () => {
	console.log('Example app listening at http://localhost:3000');
});
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/index', function (req, res) {
	res.sendFile('/home/lenovo/Desktop/Adhip/index.html');
});
app.get('/result', function (req, res) {
	res.sendFile('/home/lenovo/Desktop/Adhip/result.ejs');
});
var userRouter = require('/home/lenovo/Desktop/Adhip/index.js');
app.use('/index', userRouter);

app.listen(3000, () => {
	console.log('Example app listening at http://localhost:3000');
})
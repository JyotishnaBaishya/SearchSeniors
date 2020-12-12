var express = require('express');
var app = express();
const expressEjsLayout=require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressEjsLayout);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

var userRouter = require('./routes/index.js');
app.use('/', userRouter);

app.use(express.static('./add'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

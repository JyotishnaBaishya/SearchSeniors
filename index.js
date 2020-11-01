var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "adhipwhoischutiya"
});
router.get('/index', function (req, res) {
	res.render('index');
});

router.post('/result', function (req, res){
	const ud=req.body;
	var state=req.body.sc;
	console.log(state);
	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "SELECT * FROM SENIORS WHERE state= ?";
		con.query(sql, [state], function (err, results, fields) {
			if (err) throw err;
			console.log(results);
			router.get('/result', function (req, res) {
				res.render('result', { matchList: results });
			});
		});
	});
});
module.exports = router;
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "ADHIP"
});
router.get('/', function(req, res){
	res.render('index');
});
router.post('/search', function (req, res) {
	var state=req.body.sc;
	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "SELECT * FROM SENIORS WHERE state= ? OR city=?";
		con.query(sql, [state, state], function (err, results, fields) {
			if (err) throw err;
			console.log(results);
			req.session.user=results;
			res.redirect('/result');
		});
	});
});
router.get('/result', function(req, res){
	res.render('result', {user: req.session.user});
});


module.exports = router;

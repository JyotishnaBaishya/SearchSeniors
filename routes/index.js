var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false
	}
});
console.log(process.env.DATABASE_URL)
router.get('/', function(req, res){
	res.render('index');
});
router.post('/search', function (req, res) {
	var state=req.body.sc;
	state=state.toLowerCase();
	client.connect();
	client.query('SELECT name, rno, city, state FROM SENIORS WHERE state = $1 OR city = $2;',[state, state], (err, results)=> {
		if(err){console.log(err);}
		console.log(results);
		res.render('result', { user:results.rows });
	});
});

module.exports=router;

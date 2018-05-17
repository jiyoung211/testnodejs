var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
	connectionLimit: 5,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'test',
	password: 'wldud'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  
	  //Use the connection
	  connection.query('select * from board', function(err, rows) {
		  if (err) console.error("err:" + err);
		  console.log("rows: " +JSON.stringify(rows));
		  
		  res.render('index', {title: 'test', rows: rows});
		  //connection.release();
		  
		  //Don't use the connection here, it has been returned to the pool.
		});

});

module.exports = router;
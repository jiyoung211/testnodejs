var express = require('express');
var router = express.Router();

//MySQL 로드
var mysql = require('mysql');
var connection = mysql.createConnection({
	connectionLimit: 5,
	host: 'localhost',
	port: 3306,
	user: 'root',
	database: 'test',
	password: 'wldud'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/board/list/1');
});

router.get('/list/:page', function(req, res, next){
	
	//pool.getConnect(function (err, connection) {
		//Use the connection
		var sqlForSelectList = "SELECT idx, creator_id title, hit FORM board";
		connection.query(sqlForSelectList, function (err,rows) {
			if(err) console.error("err: " + err);
			console.log("rows: " +JSON.stringify(rows));
			  
			res.render('index', {title: 'test', rows: rows});
			//connection.release();
		});
	//});
});

module.exports = router;
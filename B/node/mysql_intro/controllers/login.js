var express 	= require('express');
var router 		= express.Router();
var db			= require.main.require('./models/db');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var sql = "SELECT * FROM user WHERE username='"+req.body.uname+"' and password='"+req.body.password+"'";
		db.getResult(sql, function(result){

			if(result != null){
				req.session.user = result;
				res.cookie('username', result.username);
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});
});

module.exports = router;



/*
 * GET home page.
 */

var _userService = require('../services/user');

var UserController = UserController || {}

UserController.index = function(req, res){
	
  	res.render('index', { title: 'Express' });
};

UserController.addUser = function (req,res) {
	_userService.add();
};

UserController.removeUser = function (req,res) {
	_userService.remove();	
};


UserController.getUser = function (req,res) {
	_userService.get();	
};

module.exports = UserController;

// exports.index = function(req, res){
// 	_userService.addUser();
//   res.render('index', { title: 'Express' });
// };
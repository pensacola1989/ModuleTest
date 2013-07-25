
var userService = userService || {};


userService.add = function () {
	console.log('this is a addUser service!');
};

userService.remove = function () {
	console.log('this is a removeUser service!');	
};

userService.get = function () {
	console.log('this is a getUser service!');		
};

module.exports = userService;
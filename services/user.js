'use strict';

var _service = _service || {};

_service.add = function () {
	// interation with database -> mongoDB

	var user = new _service.entity({
		name: 'fuck',
		sex: 'female',
		age: 22
	});
	console.log(user);
	user.save(function (err,user) {
		if(err)
			console.log(err);
		else
			console.log(user);
	});
};

_service.remove = function () {
	console.log('this is a removeUser service!');	
};

_service.get = function () {
	console.log('this is a getUser service!');		
};

_service.init = function (db,entity) {
	_service.db = db;
	_service.entity = entity;
}

// ------------------------------------------------------
var userService = function () {
	// get DB instance;
	var DB = require('./datasource');
	var mongoose = DB.getMongoose();
	var Schema = mongoose.Schema;


	this.db = DB.getDb();

	var userSchema = new Schema({
		name: String,
		sex: String,
		age: Number
	});

	var user = mongoose.model('user',userSchema);

	_service.init(this.db,user);
}

userService.prototype = {
	addUser: _service.add,
	removeUser: _service.remove,
	getUser: _service.get
};


module.exports = userService;
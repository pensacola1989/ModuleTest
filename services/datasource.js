/**
 * This module represents application datasouces configuration.
 */

'use strict';

var _mongoose = require('mongoose')
	, _dbs = {}
	, _dbUrl = 'mongodb://localhost/myApp';

function getDb () {
	if(!db) {
		var db = _mongoose.createConnection(_dbUrl);		
	}

	db.on('error',function (err) {
		console.log(err);
	});

	db.on('connected',function () {
		console.log('MongoDB Connected!');
	});

	return db;
}

function setMongoose (mongoose) {
	_mongoose = mongoose;
}

function getMongoose () {
	return _mongoose;
}

module.exports = {
	getDb: getDb,
	setMongoose: setMongoose,
	getMongoose: getMongoose
};
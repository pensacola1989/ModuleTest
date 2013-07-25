// var fuck = require('./routes/fuck');

var serviceConfig = {

};

var controllerPath = './controllers/';

var routeConfig = { 
	"GET /" : "fuck#index",
	"GET /users": "fuck#getUser",
	"GET /up": "fuck#removeUser",
	"GET /ua": "fuck#addUser"
};


// controller dependencty
// service inject
var ctlrConfig = {
	fuck: {
		addUser: 'addUser',
		getUser: 'getUser',
		removeUser: 'removeUser'
	}
};

function loadController (app, controllerConfig) {
	var controllers = {};

	for(controllerName in controllerConfig) {
		if(controllerConfig.hasOwnProperty(controllerName)) {
			var ctlr = require(controllerPath + controllerName);
			controllers[controllerName] = ctlr;
		}
	}
	return controllers;
}

function loadRoutes (app, config, controllers) {
	var routeValue
	 ,	verb
	 ,	path
	 ,	controller
	 , 	action;

	var routingMethods = {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete'
    };


	for(var cfg in config) {
		if(config.hasOwnProperty(cfg)) {
			routeValue = cfg.split(' ');

			if(routeValue.length == 2) {
				verb = routeValue[0];
				path = routeValue[1];
			}

			if(config[cfg].split('#').length == 2) {
				controller = config[cfg].split('#')[0];
				action = config[cfg].split('#')[1];
			}

			if(!routingMethods[verb]) {
				throw new Error('Http verb' + verb + 'is not supported!');
			}
			console.log('.........................................')
			app[routingMethods[verb]](path,controllers[controller][action]);
		}
	}
}

function configRoutes(app) {
	console.log('enter configRoutes');
	var controllers = loadController(app,ctlrConfig);
	loadRoutes(app,routeConfig,controllers);
	// app.get('/', fuck.index);
	// app.get('/users', fuck.getUser);
	// app.get('/up', fuck.removeUser);
	// app.get('/ua', fuck.addUser);
}

module.exports = {
	configRoutes: configRoutes
}
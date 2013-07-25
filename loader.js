var fuck = require('./routes/fuck')

var testConfig = { 
	"GET /" : "fuck#index",
	"GET /users": "fuck#getUser",
	"GET /up": "fuck#removeUser",
	"GET /ua": "fuck#addUser"
};


function loadRoutes (config) {

	var routingMethods = {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete'
    };


	for(var cfg in config) {
		if(config.hasOwnProperty(cfg)) {
			var routeValue = cfg.split(' ');
			if(routeValue == 2) {
				
			}
		}
	}
}

function configRoutes(app) {
	app.get('/', fuck.index);
	app.get('/users', fuck.getUser);
	app.get('/up', fuck.removeUser);
	app.get('/ua', fuck.addUser);
}

module.exports = {
	configRoutes: configRoutes
}
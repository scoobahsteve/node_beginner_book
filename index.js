var server = require(__dirname + '/server.js');
var router = require(__dirname + '/router.js');
var requestHandlers = require(__dirname + '/requestHandlers.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(router.route, handle);

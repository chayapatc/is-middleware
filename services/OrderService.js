var request = require('request');
var Promise = require('bluebird');

module.exports = function(config) {

	return {
		
		create: function(order) {

			return new Promise(function(resolve, reject) {
				var options = {
					body: order,
					json: true
				};

				request.post(config.endpoints.orderService + '/order', options, function(error, response, body) {
					if (error) {
						return reject(error);
					}

					if (typeof body === 'string') {
						body = JSON.parse(body);
					}

					return resolve(body);
				});
			});
		},

		find: function() {

			return new Promise(function(resolve, reject) {
				request.get(config.endpoints.orderService + '/order', function(error, response, body) {
					if (error) {
						return reject(error);
					}

					if (typeof body === 'string') {
						body = JSON.parse(body);
					}

					return resolve(body);
				});
			});
		}
	};
};
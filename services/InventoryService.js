var request = require('request');
var Promise = require('bluebird');

module.exports = function(config) {

	return {

		add: function(item) {
			var options = {
				body: item,
				json: true
			};

			return new Promise(function(resolve, reject) {
				request.post(config.endpoints.inventoryService + '/stock/add', options, function(error, response, body) {
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

		remove: function(item) {
			var options = {
				body: item,
				json: true
			};

			return new Promise(function(resolve, reject) {
				request.post(config.endpoints.inventoryService + '/stock/remove', options, function(error, response, body) {
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

		removeAll: function(items) {
			var that = this;
			var requests = items.map(function(item) {
				return that.remove(item);
			});

			return Promise.all(requests);
		}
	};
};
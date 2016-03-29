var request = require('request');
var Promise = require('bluebird');

module.exports = function(config) {

	return {
		findCategories: function() {			

			return new Promise(function(resolve, reject) {

				request.get(config.endpoints.productService + '/category', function(error, response, body) {
					if (error) {
						return reject(error);
					}

					var data = JSON.parse(body);
					return resolve(data);
				});
			});
		},

		findProducts: function() {

			return new Promise(function(resolve, reject) {

				request.get(config.endpoints.productService + '/product', function(error, response, body) {
					if (error) {
						return reject(error);
					}

					var data = JSON.parse(body);
					return resolve(data);
				});
			});
		},

		findProductById: function(productId) {
			return new Promise(function(resolve, reject) {

				request.get(config.endpoints.productService + '/product/' + productId, function(error, response, body) {
					if (error) {
						return reject(error);
					}

					var data = JSON.parse(body);
					return resolve(data);
				});
			})
		}
	};
};
module.exports = function(ProductService) {

	return {

		find: function(req, res) {
			
			ProductService.findProducts().then(function(products) {
				return res.json(products);
			}, function(error) {
				return res.status(500).json(error);
			});
		},

		findById: function(req, res) {
			var id = req.params.id;

			ProductService.findProductById(id).then(function(product) {
				return res.json(product);
			}, function(error) {
				return res.status(500).json(error);
			});
		}

	};
};
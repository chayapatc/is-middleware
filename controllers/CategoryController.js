module.exports = function(ProductService) {

	return {

		find: function(req, res) {
			
			ProductService.findCategories().then(function(categories) {
				return res.json(categories);
			}, function(error) {
				return res.status(500).json(error);
			});
		}

	};
};
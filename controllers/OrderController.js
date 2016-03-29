module.exports = function(OrderService, InventoryService) {

	return {

		create: function(req, res) {
			OrderService.create(req.body)
				.then(function(result) {
					return res.json(result);
				}, function(error) {
					return res.status(500).json(error);					
				});
		},

		find: function(req, res) {
			OrderService.find()
				.then(function(result) {
					return res.json(result);
				}, function(error) {
					return res.status(500).json(error);					
				});
		},

	};
};
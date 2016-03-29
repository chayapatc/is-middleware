module.exports = function(OrderService, InventoryService) {

	return {

		create: function(req, res) {
			
			OrderService.create(req.body)
				.then(function() {
					return InventoryService.remove();
				})
				.then(function(result) {
					return res.json(result);
				}, function(error) {
					return res.status(500).json(error);					
				});
		}

	};
};
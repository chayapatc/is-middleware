module.exports = function(OrderService, InventoryService) {

	return {

		create: function(req, res) {
			var items = req.body.items;
			var finalResult = {};

			OrderService.create(req.body)
				.then(function(result) {
					finalResult.order = result;

					var stockItems = items.map(function(item) {
						item.amount = 1;

						return item;
					});

					return InventoryService.removeAll(stockItems);
				})
				.then(function(result) {
					finalResult.currentStocks = result.map(function(stock) {
						return stock.currentStock;
					});

					return res.json(finalResult);
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
		}

	};
};

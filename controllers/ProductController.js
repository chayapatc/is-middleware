module.exports = function(ProductService) {

	return {
		
		find: function(req, res) {
			
			return res.json([]);
		},

		findById: function(req, res) {
			
			return res.json({});
		}

	};
};
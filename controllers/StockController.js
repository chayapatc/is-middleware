module.exports = function(InventoryService) {

    return {

        add: function(req, res) {

            InventoryService.add(req.body).then(function(result) {
                return res.json(result);
            }, function(error) {
                return res.status(500).json(error);
            });
        },


        remove: function(req, res) {

            InventoryService.remove(req.body).then(function(result) {
                return res.json(result);
            }, function(error) {
                return res.status(500).json(error);
            });
        }
    };
};

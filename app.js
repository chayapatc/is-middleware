var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

// config
var config = require('./config.js');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// services
var OrderService = require('./services/OrderService.js')(config);
var InventoryService = require('./services/InventoryService.js')(config);
var ProductService = require('./services/ProductService.js')(config);

// controllers
var OrderController = require('./controllers/OrderController.js')(OrderService, InventoryService);
var CategoryController = require('./controllers/CategoryController.js')(ProductService);
var ProductController = require('./controllers/ProductController.js')(ProductService);


app.post('/order', OrderController.create);

app.get('/category', CategoryController.find);

app.get('/product', ProductController.find);
app.get('/product/:id', ProductController.findById);

app.listen(config.port, function() {
	console.log(`app listening on port ${config.port}`);
});
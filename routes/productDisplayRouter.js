const { Router } = require('express');
const { getProductDisplay } = require('../controllers/productDisplayController');
const productDisplay = Router();

productDisplay.get('/productDisplay', getProductDisplay);

module.exports = productDisplay;
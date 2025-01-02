const { product_info } = require('./productFormController');

async function getProductDisplay(req, res) {
    res.render('productDisplay', { products: product_info });
}

module.exports = { getProductDisplay };
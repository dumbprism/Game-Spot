const { types } = require('./ptFormController');
const {product_info} = require('./productFormController')

async function getHomePage(req, res) {
    res.render('home', { types: types,products : product_info});
}


module.exports = { getHomePage };


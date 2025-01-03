const {types} = require('../controllers/ptFormController')

const product_info = [

];

async function getProductForm(req, res) {
    res.render('productForm',{types:types});
}

async function postProductForm(req, res) {
    const product_name = req.body.name;
    const product_type = req.body.type;
    const product_price = req.body.price;

    const product = {
        name: product_name,
        type: product_type,
        price: product_price,
    };

    product_info.push(product);

    res.redirect('/');
}

module.exports = { getProductForm, postProductForm, product_info };
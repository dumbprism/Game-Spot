const product_info = [
    {
        name: 'product-name',
        type: 'product-type',
        price: 0,
        company: 'company'
    }
];

async function getProductForm(req, res) {
    res.render('productForm');
}

async function postProductForm(req, res) {
    const product_name = req.body.name;
    const product_type = req.body.type;
    const product_price = req.body.price;
    const product_company = req.body.company;

    const product = {
        name: product_name,
        type: product_type,
        price: product_price,
        company: product_company
    };

    product_info.push(product);

    res.redirect('/productDisplay');
}

module.exports = { getProductForm, postProductForm, product_info };
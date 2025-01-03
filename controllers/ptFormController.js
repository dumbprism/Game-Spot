const types = [

    'appliances',
    'beauty',
    'books',
    'clothing',
    'electronics',
    'gift cards',
    'jewellery',
    'home & kitchen',
    'toys'
    
];


async function getProductType(req,res){
    res.render('ptForm')
   
}

async function postProductType(req,res){
    
    const type = req.body.product_type;
    types.push(type);
    res.redirect('/')
    
}

module.exports = {getProductType,postProductType,types,}
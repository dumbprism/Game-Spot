const {pool} = require('../db/pool');

async function getProducts(){
    const {product_rows} = await pool.query("SELECT * FROM products;")
    return product_rows;
}

async function getProductTypes(){
    const {product_type} = await pool.query("SELECT * FROM product_types;");
    return product_type;

}

async function insertProduct(product){
   await pool.query("INSERT INTO product (product) VALUES ($1);",product);
}


module.exports = {getAllProducts,getProductTypes,insertProduct};
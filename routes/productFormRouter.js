const {Router} = require('express');
const {getProductForm,postProductForm} = require('../controllers/productFormController')

const productForm = Router()

productForm.post('/',postProductForm);
productForm.get('/productForm',getProductForm);



module.exports = productForm
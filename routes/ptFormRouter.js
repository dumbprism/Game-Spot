const {Router} = require('express');
const {getProductType,postProductType} = require('../controllers/ptFormController');
const ptForm = Router()

ptForm.post('/ptForm',postProductType);
ptForm.get('/ptForm',getProductType);

module.exports = ptForm
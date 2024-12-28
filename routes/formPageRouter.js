const {Router} = require('express')
const {getNewGame,postNewGame} = require('../controllers/formPageController');
// const postNewGame = require('../controllers/formPageController');


formPage = Router()

formPage.post('/',postNewGame);
formPage.get('/form',getNewGame);

module.exports = formPage
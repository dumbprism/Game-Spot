const { Router } = require('express');
const { getHomePage } = require('../controllers/homeController');
const homeRouter = Router();

homeRouter.get('/', getHomePage);

module.exports = homeRouter;
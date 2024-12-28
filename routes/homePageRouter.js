const {Router} = require('express')
// const path = require('path')
const homePageController = require('../controllers/homePageController')

homePage = Router()


homePage.get('/',homePageController)

module.exports = homePage;
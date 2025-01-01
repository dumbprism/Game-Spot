const { types } = require('./ptFormController');

async function getHomePage(req, res) {
    res.render('home', { types: types });
}

module.exports = { getHomePage };


async function homePage(req,res) {

    res.render('homePage',{url : "https://upload.wikimedia.org/wikipedia/en/8/84/Hitman_2015.jpg"})
}

module.exports = homePage
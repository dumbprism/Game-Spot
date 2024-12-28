
const game_details = [
    {
        name : "hitman",
        creator : "Steve Brazell",
        desc : "quite a cool game",
        url : "https://upload.wikimedia.org/wikipedia/en/8/84/Hitman_2015.jpg",
    }
]

async function getNewGame(req,res) {
    res.render('formPage');
}

async function postNewGame(req,res) {

   const name  = req.body.name;
   const creator = req.body.creator;
   const desc = req.body.description;
   const url = req.body.url;

   const detail = {
    name : name,
    creator : creator,
    desc : desc,
    url  : url
   }
   game_details.push(detail);

   res.render('homePage', {url : detail.url})

//    res.redirect('/form')

}

module.exports = {getNewGame,postNewGame}
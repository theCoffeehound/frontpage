const Item = require('../models/item-model.js');
const { Types } = require('mongoose');



//  Hakee ja tuo kaikki käyttäjät tietokannasta
const getItems = (req, res, next) => {

    console.log("GET all items request");
    Item.find()
        .then(items => res.json(items))
        .catch(error => res.status(400).json('Error :', error));
}



//  Hoitaa rekisteröitymisen eli luodaan siis uusi käyttäjä tietokantaan
//  user_id luodaan täällä ja muut tiedot tuodaan frontendistä 
//  Lopuksi uusi käyttäjä tallennetaan tietokantaan

const addItem = (req, res, next) => {
    const username = req.body.username;
    const tietokone = req.body.tietokone;
    const orgos = req.body.orgos;
    const newos = req.body.newos;
    const pvm = req.body.pvm;

    Item.init();

    const newItem = new Item({
        username,
        tietokone,
        orgos,
        newos,
        pvm
    });

    newItem.save()
        .then(() => res.json('New user added to database!'))
        .catch(err => res.status(400).json('Error : ' + err));
};



exports.addItem = addItem;
exports.getItems = getItems;
// exports.getByName = getByName;
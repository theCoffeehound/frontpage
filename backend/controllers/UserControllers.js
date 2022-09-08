const User = require('../models/user-model.js');
const { Types } = require('mongoose');



//  Hakee ja tuo kaikki käyttäjät tietokannasta
const getAllUsers = (req, res, next) => {

    console.log("GET all users request");
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error :', error));
}



//  Hoitaa rekisteröitymisen eli luodaan siis uusi käyttäjä tietokantaan
//  user_id luodaan täällä ja muut tiedot tuodaan frontendistä 
//  Lopuksi uusi käyttäjä tallennetaan tietokantaan

const register = (req, res, next) => {
    const uid = new Types.ObjectId();
    const username = req.body.username;
    const email = req.body.email;
    const salasana = req.body.salasana;

    User.init();

    const newUser = new User({
        uid,
        username,
        email,
        salasana
    });

    newUser.save()
        .then(() => res.json('New user added to database!'))
        .catch(err => res.status(400).json('Error : ' + err));
};


//  Hoitaa kirjautumisen
//
//  Tuodaan tiedot frontendistä
//  Etsii tuodun sähköpostin tietokannasta ja mikäli se löytyy 
//  tutkitaan seuraavaksi mätsääkö salasana käyttäjän antamaan salasanaan

const login = async (req, res, next) => {
    const email = req.body.email;
    const salasana = req.body.salasana;

    let loginUser;
    //  Etsii sähköpostin 
    try{
        loginUser = await User.findOne({ email: email })
    }
    catch (err) {
        const error = new Error(
            'sähköpostia ei löytynyt', 404
        );
        return next("Säköpostia ei löytynyt", error);
    }
    if (loginUser) {
        if (salasana === loginUser.salasana) {
            res.send({ message: "Right password", user: loginUser, status: 200});
        }
        else {
            res.send({ message: "Wrong password", status: 401});
        }
    }
    else {
        const error = new Error(
          'could not find that user', 404
        );
        return next(error);
    }



    // User.findOne({ email: email })
    //     .then(user => {
    //         if (user) {
    //             if (salasana === user.salasana) {
    //                 res.send({ message: "login success", user: user })
    //             }
    //             else {
    //                 res.send("not register")
    //             }
    //         }
    //     })
    //     .catch(err => res.status(404).json('Error : ' + err));
};

exports.login = login;
exports.register = register;
exports.getAllUsers = getAllUsers;
// exports.getByName = getByName;
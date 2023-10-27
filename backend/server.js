const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: "./config.env" });


const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}));




//  Routet
const projectRoutes = require('./routes/projectRoutes');
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/userRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');
const todoRoutes = require('./routes/todoRoutes.js');
const uutisetRoutes = require('./routes/uutisetRoutes.js');


// ROUTES
app.use("/api/projects", projectRoutes);
app.use('/api/test', testRoutes);
app.use('/api/user', userRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/todo', todoRoutes);
// News
app.use('/api/yle', uutisetRoutes);

console.log(`********************************************************`);
console.log(`*                                                      *`);
console.log(`*      Muistithan vaihtaa oikean IP oikeanosoitteen    *`);        
console.log(`*                                                      *`);
console.log(`********************************************************`);


mongoose
    .connect(process.env.dbURI)
    .then(() => {
        app.listen(process.env.PORT);
        console.log(`Serveri käynnistyy...`);
        console.log(`Serveri pyörii nyt portissa ${process.env.PORT}`);
    })
    .catch(err => {
        console.log("Error tietokantaan yhditettäessä: \n",err)
    });
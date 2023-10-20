const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: "./config.env" });
const axios = require('axios'); // Import the Axios library



const app = express();
const yleapp = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}));
yleapp.use(express.json());
yleapp.use(cors({ origin: "http://localhost:3000" }));

//  Routet
const projectRoutes = require('./routes/projectRoutes');
const testRoutes = require('./routes/test-routes');
const userRoutes = require('./routes/userRoutes.js');
const itemRoutes = require('./routes/itemRoutes.js');
const uutisetRoutes = require('./routes/uutisetRoutes.js');


// ROUTES
app.use("/api/projects", projectRoutes);
app.use('/api/test', testRoutes);
app.use('/api/user', userRoutes);
app.use('/api/item', itemRoutes);
yleapp.use('/api/yle', uutisetRoutes);

// New route for fetching JSON data from an external URL
app.get('/api/fetchNews', async (req, res) => {
    try {
        // Replace the URL with the external JSON data URL
        const response = await axios.get("https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=" + process.env.app_id + "&" + "app_key=" + process.env.app_key);
        const jsonData = response.data;
        res.json(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
        res.status(error.response ? error.response.status : 500).json({ error: 'An error occurred while fetching data.' });
      }
});
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

// yleapp.listen(80, "https://external.api.yle.fi/v1/teletext/pages/", () => {
//     console.log("Trying to use two servers")
// });
//app.listen(80, "https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=" + process.env.app_id + "&" + "app_key=" + process.env.app_key)
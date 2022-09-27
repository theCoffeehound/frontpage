const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(

    {
        username: { type: String},
        tietokone: { type: String },
        orgos: { type: String },
        newos: { type: String },
        pvm: { type: Date},
        created: { type: Date, default : () => new Date()},
    }
);

module.exports = mongoose.model('Item', ItemSchema);
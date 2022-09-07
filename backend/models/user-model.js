const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(

    {
        uid: { type:mongoose.Types.ObjectId },
        username: { type: String },
        email: { type: String },
        salasana: { type: String },
        created: { type: Date, default : () => new Date()},
    }
);

module.exports = mongoose.model('User', UserSchema);
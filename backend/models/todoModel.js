const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema(
  {
    _id: { type:mongoose.Types.ObjectId },
    uid: { type:mongoose.Types.ObjectId },
    listName: { 
        type: String 
    },
    title: { 
        type: String 
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
    date: {
        type: Date,
    },
  },
);

module.exports = mongoose.model('TodoItem', TodoSchema);
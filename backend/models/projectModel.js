const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema(
  {
    _id: { type:mongoose.Types.ObjectId },
    uid: { type:mongoose.Types.ObjectId },
    name: { 
        type: String 
    },
    description: {
        type: String,
    },
    phase: {
        type: String,
    },
    date: {
        type: Date,
    },
  },
);

module.exports = mongoose.model('Project', ProjectSchema);
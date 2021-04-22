const mongoose = require('mongoose');
const AthleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Title is required" ],
        minlength: [ 3, "Your title must be at least 3 characters long" ],
      },
     position: {
         type: String
     },
    }, { timestamps: true });

module.exports = mongoose.model('Athlete', AthleteSchema);
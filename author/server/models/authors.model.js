const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "must be atleast 3 characters"]
    },
    position: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);
/////////////////////////////////////////////////
//  AUTHOR MODEL
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const mongoose = require("mongoose");

// //// SCHEMAS /////////////////////////////////
const AuthorSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least three characters long"]
    }, 
    age: {
        type: Number,
        min: [1, "{PATH} must be at least 1"],
        max: [150, "{PATH} must be less than 150"]
    },
    genra: String,
    classic: Boolean
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Author = mongoose.model("Author", AuthorSchema);

// **** Export Model ********
module.exports = Author;
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
    } 
}, {timestamps: true});			// Timestamps implement CreatedAt and UpdatedAt

// //// MODELS //////////////////////////////////
const Author = mongoose.model("Author", AuthorSchema);

// **** Export Model ********
module.exports = Author;
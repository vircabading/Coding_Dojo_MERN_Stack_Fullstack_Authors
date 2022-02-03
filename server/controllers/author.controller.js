/////////////////////////////////////////////////
//  AUTHOR CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Author = require("../models/author.model");

// //// CREATE //////////////////////////////////

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(
            newlyCreatedAuthor => res.json({ 
                author: newlyCreatedAuthor,
                message: "🍻🍻🍻 Create was successful 🍻🍻🍻"
            })
        )
        .catch(err => res.status(400).json(err ));
    };

// //// RETRIEVE ////////////////////////////////

// **** Find All ********
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then( allAuthors => 
            res.json({
                authors: allAuthors,
                message: "🦄🦄🦄 Success: Found All 🦄🦄🦄"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// **** Find One ********
module.exports.fineOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(
            oneAuthor => res.json ({
                author: oneAuthor,
                message: "🌈🌈🌈 Success: Found one 🌈🌈🌈"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// //// UPDATE //////////////////////////////////

module.exports.updateAuthor = (req,res) => {
    Author.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedAuthor => res.json({
                author: updatedAuthor,
                message: "🍔🍔🍔 Success: Update 🍔🍔🍔"
            })
        )
        .catch(err => res.status(400).json(err ));
};

// //// DELETE //////////////////////////////////

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: "🍕🍕🍕 Success: Delete  🍕🍕🍕"
            })
        )
        .catch(err => res.status(400).json(err ));
};
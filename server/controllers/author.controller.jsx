/////////////////////////////////////////////////
//  AUTHOR CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Author = require("../models/author.model");

// //// CREATE //////////////////////////////////

module.exports.create = (req, res) => {
    Author.create(req.body)
        .then(
            newlyCreatedAuthor => res.json({ 
                author: newlyCreatedAuthor,
                message: "🍻🍻🍻 Create was successful 🍻🍻🍻"
            })
        )
        .catch(
            err => res.json({ 
                message: "🤦🤦🏼🤦 Create was not successful 🤦🤦🏼🤦🏼", 
                error: err 
            })
        );
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
        .catch( err =>
            res.json({
                message: "🤚🏼🤚🏼🤚🏼 Failure: UnAble to Find All ✋🏼✋🏼✋🏼",
                error: err
            })
        )
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
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Find a Product 🛑🛑🛑",
                error: err
            })
        )
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
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Update 🛑🛑🛑",
                error: err
            })
        )
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
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Delete 🛑🛑🛑",
                error: err
            })
        )
};
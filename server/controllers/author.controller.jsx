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


// //// UPDATE //////////////////////////////////

// //// DELETE //////////////////////////////////

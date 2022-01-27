/////////////////////////////////////////////////
//  AUTHOR ROUTES
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const AuthorController = require("../controllers/author.controller");

// //// ROUTES //////////////////////////////////
module.exports = app => {
    // **** Create ******************************
    app.post("/api/authors/create", AuthorController.createAuthor )

    // **** Retrieve ****************************
    app.get("/api/authors", AuthorController.findAllAuthors );
    app.get("/api/authors/:id", AuthorController.fineOneAuthor );

    // **** Update ******************************
    app.put("/api/authors/:id/update", AuthorController.updateAuthor );

    // **** Delete ******************************
    app.delete("/api/authors/:id/delete", ProductController.deleteProduct);
}
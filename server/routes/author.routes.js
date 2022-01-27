/////////////////////////////////////////////////
//  AUTHOR ROUTES
/////////////////////////////////////////////////

const AuthorController = require("../controllers/author.controller");

module.exports = function(app) {
    // **** Create ******************************
    app.post("/api/authors/new", AuthorController.createAuthor )

    // **** Retrieve ****************************
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.fineOneAuthor);

    // **** Update ******************************
    app.put("/api/authors/update/:id", AuthorController.updateAuthor);

    // **** Delete ******************************
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
}
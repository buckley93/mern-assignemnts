const jokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", jokeController.findAllJokes);
    app.get("/api/jokes/:id", jokeController.findOneJoke);
    app.put("/api/jokes/update/:id", jokeController.updateExistingJoke);
    app.post("/api/jokes/new", jokeController.createJoke);
    app.delete("/api/jokes/delete/:id", jokeController.deleteExistingJoke);
}
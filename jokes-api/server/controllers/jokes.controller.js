const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allTheJokes => res.json({ jokes: allTheJokes }))
        .catch(err => res.json({ message: "Something went wrong when getting all of the jokes", error: err }))
};

module.exports.findOneJoke = (req, res) => {
    Joke.find({ _id: req.param.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "Something went wrong when trying to find your joke", error: err }))
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createdJoke => res.json({ joke: createdJoke }))
        .catch(err => res.json({ message: "Something went wrong when trying to create your joke", error: err}))
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true })
        .then(updateJoke => res.json({ joke: updateJoke }))
        .catch(err => res.json({ message: "Something went wrong when updaing your joke", error: err}))
}

module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(deleteJoke => res.json({ deleteJoke: deleteJoke}))
        .catch(err => res.json({ message: "There was an issue with deleting your joke", error: err }))
}
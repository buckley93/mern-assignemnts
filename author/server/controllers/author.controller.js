const Author = require('../models/authors.model');

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name: name
    })
        .then((author) => {
            res.json(author),
            console.log(`creating ${author} in controller`)
           })
        .catch(err => {
            res.status(400).json(err),
            console.log(`error in controller`)
        })
}

module.exports.findAllAuthors = (req, res) => {
    Author.find({})
        .then((authors) => {
            res.json(authors),
            console.log("finding all authors in your controllers")
        })
        .catch(err => {
            res.json(err),
            console.log("You have an error in your findAllAuthors in your controller")
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
        .then((author) => {
            res.json(author),
            console.log(`now finding ${author}`)
        })
        .catch(err => {
            res.json(err),
            console.log("error in your findOneAuthor controller")
        })
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedAuthor) => {
            console.log("in update Author");
            console.log(updatedAuthor);
            res.json(updatedAuthor)
        })
        .catch((err) => {
            console.log("error found in update");
            res.status(400).json(err);
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then((deletedAuthor) => {
            console.log("in deleteAuthor")
            console.log(deletedAuthor);
            res.json(deletedAuthor)
        })
        .catch((err) => {
            console.log("error in your deleteAuthor controller");
            res.status(400).json(err)
        })
}
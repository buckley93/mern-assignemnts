const Athlete = require('../models/athlete.model');

module.exports.findAllAthletes = (req, res) => {
    Athlete.find({})
        .then(athletes => res.json(athletes))
        .catch((err) => {
            console.log("error in your find all controller"),
            res.status(400).json(err)
        })
}

module.exports.findOneAthlete = (req, res) => {
    Athlete.findById({_id: req.params.id})
        .then(athlete => res.json(athlete))
        .catch((err) => {
            console.log("error in find one athlete"),
            res.status(400).json(err)
        })
}

module.exports.create = (req, res) => {
    const { name, position } = req.body;
    Athlete.create({
        name,
        position
    })
        .then(athlete => res.json(athlete))
        .catch(err => {
            console.log("error in create"),
            res.status(400).json(err)
        })
}

module.exports.delete = (req, res) => {
    Athlete.findByIdAndDelete({ _id: req.params.id })
        .then(deletedAthlete => res.json(deletedAthlete))
        .catch(err => {
            console.log("error in delete"),
            res.status(400).json(err)
        })
}
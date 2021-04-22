const AthleteController = require('../controllers/teamManager.controller')
module.exports = function(app) {
    app.get('/api', AthleteController.findAllAthletes);
    app.get('/api/athletes/:id', AthleteController.findOneAthlete);
    app.post('/api/athletes', AthleteController.create);
    app.delete('/api/athletes/:id', AthleteController.delete)
}
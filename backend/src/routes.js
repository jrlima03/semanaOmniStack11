const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require ('./controllers/SessionController')

const routes = express.Router();

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.listIncidents);
routes.post('/incidents', IncidentController.createIncident);
routes.delete('/incidents/:id', IncidentController.deleteIncident);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.createSession);
module.exports = routes;
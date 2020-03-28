const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const  routes = express.Router();

//Sessions
routes.post('/sessions', SessionController.create);

//ONGS
//Listar ONGS
routes.get('/ongs', OngController.index);
//Cadastrar ONGS
routes.post('/ongs', OngController.create);

//Profile (listar especifico)
routes.get('/profile', ProfileController.index);

//Incidentes
//Listar Incidentes
routes.get('/incidents', IncidentController.index);
//Cadastrar Incidentes
routes.post('/incidents', IncidentController.create);
//Deletar Incidentes
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;

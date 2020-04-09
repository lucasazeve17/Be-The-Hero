const express = require('express')

const OngController = require('./Controllers/OngController')
const IncidentsController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

const routes = express.Router()

routes.post('/session',SessionController.create)

routes.get('/ongs',OngController.index)
routes.post('/ongs',OngController.create)

routes.get('/profile',ProfileController.index)

routes.post('/incidents',IncidentsController.create)
routes.get('/incidents',IncidentsController.index)
routes.delete('/incidents/:id',IncidentsController.destroy)


module.exports = routes
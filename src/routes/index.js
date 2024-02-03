const { Router } = require('express')

const usersRoutes = require('./users.routes')
const sessionsRoutes = require('./sessions.routes')
const notesRoutes = require('./notes.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/notes', notesRoutes)

routes.use('/sessions', sessionsRoutes)

module.exports = routes
const { Router } = require('express')
const UserController = require('../controllers/UserController')

const ensureAuthenticate = require('../middlewares/ensureAuthenticate')

const usersRoutes = Router()

const userController = new UserController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticate, userController.update)

module.exports = usersRoutes
const { Router } = require('express')
const UserController = require('../controllers/UserController')

const UserAvatarController = require('../controllers/UserAvatarController')
const multer = require('multer')
const uploadConfig = require('../config/upload')
const upload = multer(uploadConfig.MULTER)

const ensureAuthenticate = require('../middlewares/ensureAuthenticate')

const usersRoutes = Router()

const userController = new UserController()
const userAvatarController = new UserAvatarController()

usersRoutes.post('/', userController.create)
usersRoutes.put('/', ensureAuthenticate, userController.update)
usersRoutes.patch('/avatar', ensureAuthenticate, upload.single('avatar'), userAvatarController.update)

module.exports = usersRoutes
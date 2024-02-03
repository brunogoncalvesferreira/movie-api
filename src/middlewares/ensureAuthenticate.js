const { verify } = require('jsonwebtoken')
const AppError = require('../utils/app.error')
const authConfig = require('../config/auth')

const ensureAuthenticate = async (request, response, next) => {
  const authHeader = request.headers.authorization

  if(!authHeader) {
    throw new AppError('Token não informado', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret)

    request.user = {
      id: Number(user_id)
    }

    return next()
  } catch {
    throw new AppError('Token inválido', 401)
  }
}

module.exports = ensureAuthenticate
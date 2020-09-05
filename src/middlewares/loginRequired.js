import JWT from 'jsonwebtoken'

export default function MiddlewareLoginRequired(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ error: 'unauthorized' })
  }

  const [, token] = authorization.split(' ')

  try {
    const tokenData = JWT.verify(token, process.env.JWT_SECRET)

    const { id, name, email } = tokenData
    req.user = {
      id,
      name,
      email,
    }

    next()
  } catch (error) {
    console.log(
      `User from IP: ${req.ip} have a JWT Expired\nExpired at: ${error.expiredAt}`,
    )
    return res.status(401).json({ error: error.message })
  }
}

module.exports = (req, res, next) =>
  !req.user ? res.status(401).send({ error: 'You need to log in' }) : next()

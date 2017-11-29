module.exports = (req, res, next) =>
  req.user.credits < 1 ?
    res.status(403).send({ error: 'Not enough credits' })
    : next()

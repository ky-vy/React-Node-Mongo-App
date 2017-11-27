const _ = process.env

module.exports = {
  googleClientID: _.GOOGLE_CLIENT_ID,
  googleClientSecret: _.GOOGLE_CLIENT_SECRET,
  mongoURI: _.MONGO_URI,
  cookieKey: _.COOKIE_KEY,
  stripePublishableKey: _.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: _.STRIPE_SECRET_KEY
}

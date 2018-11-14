const plural = require('./plural')
const _ = require('lodash')
const singular = require('./singular')

module.exports = function addRoute(db, router) {
	const opts = { foreignKeySuffix: 'Id' }
    db.forEach((value, key) => {
    	console.log(value, key)
    	if (_.isPlainObject(value)) {
      	router.use(`/${key}`, singular(db, key))
      	return
    	}

    	if (_.isArray(value)) {
      	router.use(`/${key}`, plural(db, key, opts))
      	return
    	}

    	var sourceMessage = ''

    	const msg =
      	`Type of "${key}" (${typeof value}) ${sourceMessage} is not supported. ` +
      	`Use objects or arrays of objects.`

    	throw new Error(msg)
  	}).value()
  router.use((req, res) => {
    if (!res.locals.data) {
      res.status(404)
      res.locals.data = {}
    }

    router.render(req, res)
  })

  router.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack)
  })
}
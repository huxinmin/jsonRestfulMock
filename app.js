const fs = require('fs');
const path = require('path');
const _ = require('lodash')
const plural = require('./src/server/router/plural')
const nested = require('./src/server/router/nested')
const singular = require('./src/server/router/singular')
const jsonServer = require('./src/server/index')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();

server.use(middlewares)

const reloadDB = (req, res, next) => {
  if (req.method === 'GET' && req.url.endsWith('/reloadDB')) {
    const dbData = { 
    	"tests": [
    		{ "id": 1, "title": "json-server", "author": "typicode" }
  		],
  		"comments": [
    		{ "id": 1, "body": "some comment", "postId": 1 }
  		],
  		"profile": { "name": "typicode" }
		}
		const db = router.db

    db.setState(dbData);
    const opts = { foreignKeySuffix: 'Id' }
    // router.use((req, res)=> {
    // 	res.json({text:1})
    // })
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
  	server.use(router)
    res.sendStatus(201);
  } else {
    next();
  }
};
server.use(reloadDB);

// server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
});
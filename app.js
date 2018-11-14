const jsonServer = require('./server/index')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const removeRoute = require('./server/router/removeRoute');
const addRoute = require('./server/router/addRoute');

server.use(middlewares);

const reloadDB = (req, res, next) => {
  if (req.method === 'GET' && req.url.endsWith('/reloadDB')) {
    removeRoute(server); // 将router中use的route删掉原数据的route并将新增的route位置替换到那里
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
    db.write();
    addRoute(db, router);
    res.sendStatus(201);
  } else {
    next();
  }
};
server.use(reloadDB);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});
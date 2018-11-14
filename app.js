const jsonServer = require('./server/index')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const removeRoute = require('./server/router/removeRoute');
const addRoute = require('./server/router/addRoute');

server.use(middlewares);

const reloadDB = (req, res, next) => {
  removeRoute(server); // 将router中use的route删掉原数据的route并将新增的route位置替换到那里
  const addData = {
    'tests': [{ "id": 1, "title": "json-server", "author": "typicode" }]
	}
	const db = router.db;
  const dbData = Object.assign({}, db.getState(), addData);
  db.setState(dbData);
  addRoute(db, router);
  db.write();
  res.sendStatus(201);
};
server.get('/reloadDB', reloadDB);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});

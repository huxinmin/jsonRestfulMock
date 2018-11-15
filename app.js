const jsonServer = require('./server/index')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const removeRoute = require('./server/router/removeRoute');
const addRoute = require('./server/router/addRoute');

server.use(middlewares);

const setBD = (dbData) => {
  removeRoute(server);
  const db = router.db;
  db.setState(dbData);
  addRoute(db, router);
  db.write();
}

const reloadDB = (req, res) => { // 重置数据
  const reloadData = {
    "posts": [{"id": 1,"title": "json-server","author": "huxinmin"}],
    "comments": [{"id": 1,"body": "some comment","postId": 1}],
    "profile": {"name": "huxinmin"}
  }
  setBD(reloadData);
  res.sendStatus(201);
};
server.get('/reloadDB', reloadDB); // 重置数据

const addDB = (req, res) => { // 新增接口数据
  console.log(req.body);
  debugger
  const { itfDataPath, ...rest } = req.body;
  const addData = jsonServer.mock(rest);
  const db = router.db;
  let obj = {}
  obj[itfDataPath] = addData;
  const dbData = Object.assign({}, db.getState(), obj);
  setBD(dbData);
  res.json({ status: 200 })
}
server.post('/addDB', jsonServer.bodyParser, addDB); // 新增接口数据

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running')
});

module.exports = function changePos(app) {
  let stack = app._router.stack;
  stack.forEach(function(layer, index) {
    if (layer.name === "router" && !layer.path) {
      let routes = layer.handle.stack;
      const len = routes.length;
      let r_idx; // router中原router开始的位置
      for (let i=0; i<len; i++) {
        if (routes[i].name === 'router' && !routes[i].path) {
          r_idx = i;
          break;
        }
      }
      routes.splice(r_idx, len - r_idx);
    }
  });
};
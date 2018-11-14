import * as indexService from '../services';

export default {
  namespace: 'index',
  state: {
    db: {},
    addVisible: false
  },
  reducers: {
    setDb(state, { data }) {
      return Object.assign(state, { db: data })
    },
    // dva中不知道为什么在components中dispatch的action虽然已经触发了reducer却不会更新页面
    // 需要去参考umi的例子with-dva
    setAddVisible(state, { visible }) {
      console.log('reducers setAddVisible')
      return Object.assign(state, { addVisible: visible })
    }
  },
  effects: {
    *fetch(action, { call, put }) {
      const { data } = yield call(indexService.fetch);
      yield put({
        type: 'setDb',
        data
      });
    },
    // *setAddVisible({visible}, {call, put}) {
    //   yield put({type: 'setAdd', visible})
    // }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

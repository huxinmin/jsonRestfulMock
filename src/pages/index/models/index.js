import * as indexService from '../services';

export default {
  namespace: 'index',
  state: {
    db: {},
    addVisible: false,
  },
  reducers: {
    setDb(state, { data }) {
      return Object.assign(state, { db: data })
    },
    setAddVisible(state, { visible }) {
      return { ...state, addVisible: visible }
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

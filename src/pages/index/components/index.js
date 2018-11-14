import styles from './index.css';
import Add from './add';

export default ({db, addVisible, dispatch}) => {
  function showModal() {
    dispatch({ type: 'index/setAddVisible', visible: true })
  }
  function onModalOk() {
    dispatch({ type: 'index/setAddVisible', visible: false })
  }
  function onModalCancel() {
    dispatch({ type: 'index/setAddVisible', visible: false })
  }
  const modalProps = {
    visible: addVisible,
    showModal: showModal,
    onCancel: onModalOk,
    onOk: onModalCancel,
  }
  return (
    <div className={styles.container}>
      <Add {...modalProps}/>
      <div className={styles.api}>
        <h5>当前可用接口</h5>
        { Object.keys(db).map((item, index) =>
            <p key={index}>
              <span>/{item}</span>
              <span>{ db[item].length ? db[item].length : 1}条数据</span>
            </p>
          )
        }
      </div>
      <div>
        <h5>接口调用方法</h5>
        <div>
          <p>假设你有如下数据：
          接口复数路径名: 'posts',
          数据形式为数组，数据为：</p>
          <pre>{JSON.stringify([ { id:1, title:'title', author: { name: 'huxinmin', age: 27 } } ])}</pre>
          <p>以及接口路径为单数的'profile'，数据形式为对象，数据为：</p>
          <pre>{JSON.stringify({ name: 'huxinmin' })}</pre>
        </div>
        <ul>
          <li>
            <h5>增删改查</h5>
            <pre>
              <p><span>GET</span><span>/posts</span></p>
            </pre>
          </li>
        </ul>
      </div>
    </div>
  )
}

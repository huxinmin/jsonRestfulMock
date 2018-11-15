import styles from './index.css';
import Add from './add';

export default ({db, addVisible, dispatch}) => {
  function showModal() {
    dispatch({ type: 'index/setAddVisible', visible: true });
  }
  function onModalOk() {
    dispatch({ type: 'index/setAddVisible', visible: false });
    dispatch({ type: 'index/fetch' });
  }
  function onModalCancel() {
    dispatch({ type: 'index/setAddVisible', visible: false });
  }
  const modalProps = {
    visible: addVisible,
    showModal: showModal,
    onCancel: onModalCancel,
    onOk: onModalOk,
  }
  return (
    <div className={styles.container}>
      <Add {...modalProps}/>
      <div className={styles.api}>
        <h2>当前可用接口</h2>
        <pre>
          { Object.keys(db).map((item, index) =>
              <p key={index}>
                <a className={styles.link} href={'/'+item}>/{item}</a>
                <span>{ db[item].length ? db[item].length : 1}条数据</span>
              </p>
            )
          }
        </pre>
      </div>
      <div className={styles.usage}>
        <h2>接口调用方法</h2>
        <div>
          <p>假设你有如下路径名为'posts'的列表数据：</p>
          <pre className={styles.data}>{JSON.stringify([ { id:1, title:'title', author: { name: 'huxinmin', age: 27 } } ])}</pre>
          <p>以及路径名为'profile'的单条数据：</p>
          <pre className={styles.data}>{JSON.stringify({ name: 'huxinmin' })}</pre>
        </div>
        <ul>
          <li>
            <h3>增删改查</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts</span><span className={styles.explain}>获取全部数据</span></p>
              <p><span className={styles.method}>GET</span><span>/posts/:id</span><span className={styles.explain}>获取详情</span></p>
              <p><span className={styles.method}>POST</span><span>/posts</span><span className={styles.explain}>新增数据</span></p>
              <p><span className={styles.method}>PUT</span><span>/posts/:id</span><span className={styles.explain}>修改全局数据</span></p>
              <p><span className={styles.method}>PATCH</span><span>/posts/:id</span><span className={styles.explain}>修改局部数据</span></p>
              <p><span className={styles.method}>DELETE</span><span>/posts/:id</span><span className={styles.explain}>删除数据</span></p>
            </pre>
          </li>
          <li>
            <h3>过滤(你可以使用'.'来进行深层次数据属性的匹配)</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?title=title&author.name=huxinmin</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?id=1&id=2</span></p>
              <p><span className={styles.method}>GET</span><span>/profile?name=huxinmin</span></p>
            </pre>
          </li>
          <li>
            <h3>分页(返回的数据形式为{JSON.stringify({ results: [], total: 10 })})</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_page=1&_limit=2</span><span className={styles.explain}>第一页，每页2条</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?_page=1</span><span className={styles.explain}>不指定每页条数默认会返回10条</span></p>
            </pre>
          </li>
          <li>
            <h3>排序('_sort'排序字段，多个用逗号隔开，'_order'排序规则，'asc'升序'desc'降序)</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_sort=age&_order=asc</span><span className={styles.explain}>对age进行升序</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?_sort=age,id&_order=asc,desc</span><span className={styles.explain}>对age进行升序,id降序</span></p>
            </pre>
          </li>
        </ul>
      </div>
    </div>
  )
}

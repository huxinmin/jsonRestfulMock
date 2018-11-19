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
                <a className={styles.link} href={window.publicPath+item}>/{item}</a>
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
          <p>和路径名为'comments'的列表数据：</p>
          <pre className={styles.data}>{JSON.stringify([{ "id": 1, "body": "some comment", "postId": 1 }])}</pre>
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
            <h3>分页(返回的数据形式为{JSON.stringify({ results: [], total: '总数' })})</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_page=1&_limit=2</span><span className={styles.explain}>第一页，每页2条</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?_page=1</span><span className={styles.explain}>不指定每页条数默认会返回10条</span></p>
            </pre>
          </li>
          <li>
            <h3>排序('_sort'排序字段,多个用逗号隔开,'_order'排序规则,'asc'升序'desc'降序)</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_sort=age&_order=asc</span><span className={styles.explain}>对age进行升序</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?_sort=age,id&_order=asc,desc</span><span className={styles.explain}>对age进行升序,id降序</span></p>
            </pre>
          </li>
          <li>
            <h3>切片(返回的数据形式为{JSON.stringify({ results: [], total: '总数' })})</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_start=1&_end=10</span><span className={styles.explain}>第一条到第10条数据</span></p>
            </pre>
          </li>
          <li>
            <h3>操作符('_gte'大于等于,'_lte'小于等于,'_ne'不等于,'_like'正则匹配, 'q'全文检索)</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?id_gte=1</span><span className={styles.explain}>id大于等于1的数据</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?title_like=title</span><span className={styles.explain}>title属性正则匹配'title'成功地数据</span></p>
              <p><span className={styles.method}>GET</span><span>/posts?q=2</span><span className={styles.explain}>全文检索,返回包含2的数据</span></p>
            </pre>
          </li>
          <li>
            <h3>关系(嵌入子属性用'_embed',嵌入父属性用'_expand')</h3>
            <pre className={styles.data}>
              <p><span className={styles.method}>GET</span><span>/posts?_embed=comments</span><span className={styles.explain}>全部'posts'数据,并嵌入属性名'comments'数据</span></p>
              <p><span className={styles.method}>GET</span><span>/posts/1?_embed=comments</span><span className={styles.explain}>单个'posts'数据,并嵌入属性名'comments'数据</span></p>
              <p><span className={styles.method}>GET</span><span>/comments?_expand=post</span><span className={styles.explain}>全部'comments'数据,并嵌入属性名'post'数据</span></p>
              <p><span className={styles.method}>GET</span><span>/comments/1?_expand=post</span><span className={styles.explain}>单个'comments'数据,并嵌入属性名'post'数据</span></p>
              <p><span className={styles.method}>GET</span><span>/posts/1/comments</span><span className={styles.explain}>id为1的'posts'中的'comments'数据</span></p>
              <p><span className={styles.method}>POST</span><span>/posts/1/comments</span><span className={styles.explain}>创建嵌套数据</span></p>
              <p><span className={styles.method}>GET</span><span>/comments/1/posts</span><span className={styles.explain}>id为1的'comments'中的'posts'数据</span></p>
              <p><span className={styles.method}>POST</span><span>/comments/1/posts</span><span className={styles.explain}>创建嵌套数据</span></p>
            </pre>
          </li>
        </ul>
      </div>
      <div className={styles.mock}>
        <h2>数据类型</h2>
        <p>在您新增接口数据的时候,我为您提供了多种数据类型,以便自动生成您需要的数据:</p>
        <ul>
          <li>
            <h3>文本(可以指定生成的范围)</h3>
            <ul>
              <li>中文段落</li>
              <li>中文句子</li>
              <li>中文汉字</li>
              <li>中文标题</li>
              <li>英文段落</li>
              <li>英文句子</li>
              <li>英文单词</li>
              <li>英文标题</li>
            </ul>
          </li>
          <li>
            <h3>数值(可以指定生成的范围)</h3>
            <ul>
              <li>整型</li>
              <li>浮点数</li>
              <li>自然数</li>
            </ul>
          </li>
          <li>
            <h3>Map(生成{JSON.stringify({ 'key': 'value' })})</h3>
          </li>
          <li>
            <h3>List(生成{JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])})</h3>
          </li>
          <li>
            <h3>日期</h3>
            <ul>
              <li>日期</li>
              <li>时间</li>
              <li>日期时间</li>
            </ul>
          </li>
          <li>
            <h3>网络</h3>
            <ul>
              <li>URL</li>
              <li>协议</li>
              <li>域名</li>
              <li>顶级域名</li>
              <li>邮件地址</li>
              <li>IP</li>
            </ul>
          </li>
          <li>
            <h3>图片(真实图片)</h3>
            <ul>
              <li>图片地址</li>
              <li>base64图片</li>
            </ul>
          </li>
          <li>
            <h3>布尔值(true和false各一半的概率)</h3>
          </li>
          <li>
            <h3>颜色</h3>
            <ul>
              <li>hex</li>
              <li>rgb</li>
              <li>rgba</li>
              <li>hsl</li>
            </ul>
          </li>
          <li>
            <h3>唯一ID</h3>
            <ul>
              <li>GUID</li>
              <li>18位身份证</li>
            </ul>
          </li>
          <li>
            <h3>名字</h3>
            <ul>
              <li>英文名</li>
              <li>英文姓</li>
              <li>英文姓名</li>
              <li>中文名</li>
              <li>中文姓</li>
              <li>中文姓名</li>
            </ul>
          </li>
          <li>
            <h3>中国地区</h3>
            <ul>
              <li>大区</li>
              <li>省</li>
              <li>市</li>
              <li>县</li>
              <li>邮政编码</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <header className={styles.header}>
        <h1 className={styles.title}>JSONRestfulMock</h1>
        <p className={styles.intro}>
        	0编码，几秒即可一键生成RESTFUL接口，自带真实数据，支持增删改查，详情，过滤，分页，排序，切片，嵌套等高级功能
        </p>
      </header>
      { props.children }
      <footer className={styles.footer}>JSONRestfulMock <br/>作者：胡新敏</footer>
    </div>
  );
}

export default BasicLayout;

import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <header className={styles.header}>
        <h1>JSONRestfulMock</h1>
      </header>
      { props.children }
      <footer className={styles.footer}>json-restful-mock</footer>
    </div>
  );
}

export default BasicLayout;

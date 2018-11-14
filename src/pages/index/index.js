// import { connect } from 'dva';
import IndexComponent from './components';

// export default connect(({ index: { db, addVisible } }) => ({ db, addVisible }) )(IndexComponent);

export default ()=> {
  return (<IndexComponent />)
}

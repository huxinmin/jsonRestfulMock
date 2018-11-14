import { connect } from 'dva';
import IndexComponent from './components';

function mapStateToProps({ index: { db, addVisible } }) {
  return {
    db,
    addVisible,
  };
}

export default connect(mapStateToProps)(IndexComponent);
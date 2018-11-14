import { Component } from 'react';
import { Modal, Button } from 'antd';

import Form from './form';

export default class Add extends Component {
  state = {
    loading: false,
    interfaceTypes: '',
    dataPath: '',
    interfaceDataTypes: []
  }
  handleOk = () => {
    const { onOk } = this.props;
    onOk();
  }
  handleCancel = () => {
    const { onCancel } = this.props;
    onCancel();
  }

  changeData = () => {}

  render() {
    const { visible, showModal } = this.props;
    const { loading, ...res } = this.state;
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          新增接口
        </Button>
        <Modal title="新增接口" visible={visible} onOk={this.handleOk}
          okText="确认"
          cancelText="取消"
          confirmLoading={loading}
          onCancel={this.handleCancel}
        >
          <Form {...res} changeData={this.changeData} />
        </Modal>
      </div>
    );
  }
}

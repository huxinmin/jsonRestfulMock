import { Component } from 'react';
import { Modal, Button } from 'antd';

export default class Add extends Component {
  state = {
    loading: false,
    data: {}
  }
  handleOk = () => {}
  handleCancel = () => {}
  showModal = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'index/setAddVisible', visible: true })
  }

  render() {
    const { visible, showModal } = this.props;
    const { loading } = this.state;
    console.log('this.props', this.props)
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          新增数据
        </Button>
        <Modal title="新增数据" visible={visible} onOk={this.handleOk}
          confirmLoading={loading}
          onCancel={this.handleCancel}
        >
          <p>sss</p>
        </Modal>
      </div>
    );
  }
}

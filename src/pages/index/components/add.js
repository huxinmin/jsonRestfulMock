import { Component } from 'react';
import { Modal, Button, message } from 'antd';

import { post } from '../services';
import Form from './form';

export default class Add extends Component {
  state = {
    loading: false,
    itfDataType: 'plural', // 接口是单条还是多条数据
    itfDataPath: '', // 接口的url路径
    itfDataDefinitions: [] // 接口数据形式定义，应该定义字段名，和字段值类型 [{ keyName: '', valType: { main: '', child: '' }, min: null, max: null }] //主类型和子类型
  }
  resetState = () => {
    this.setState({
      loading: false,
      itfDataType: 'plural',
      itfDataPath: '',
      itfDataDefinitions: []
    });
  }
  handleOk = () => {
    const { onOk } = this.props;
    const { loading, ...rest } = this.state;
    this.setState({ loading: true });
    post(rest)
      .then((res) => {
        if (res.data.status == '200') {
          message.success('新增成功');
        }
      })
      .catch((err) => {
        message.error('新增失败');
      })
      .finally(() => {
        this.resetState();
        onOk();
      });
  }
  handleCancel = () => {
    const { onCancel } = this.props;
    this.resetState();
    onCancel();
  }

  addItfDef = () => {
    this.setState({
      itfDataDefinitions: this.state.itfDataDefinitions.concat([{ keyName: '', valType: { main: '', child: '' }, min: null, max: null }])
    });
  }

  changeState = (type, val) => {
    this.setState({
      [type] : val
    })
  }

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
          <Form {...res} addItfDef={this.addItfDef} changeState={this.changeState}/>
        </Modal>
      </div>
    );
  }
}

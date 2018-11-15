import { Button, Input, Select, Icon } from 'antd';

import Item from './item';

const { Option } = Select;

export default (props) => {
	function handleChange(val) {
    props.changeState('itfDataType', val);
  }
	function handleInput(e) {
    const value = e.target.value;
    props.changeState('itfDataPath', value);
  }
	function changeItfDef(index, type, val) {
    const { itfDataDefinitions } = props;
    itfDataDefinitions[index][type] = val;
    props.changeState('itfDataDefinitions', itfDataDefinitions);
  }
	function renderItems(itfDataDefinitions) {
		return itfDataDefinitions.map((item, key) => <Item key={key} {...item} handleChange={changeItfDef.bind(null, key)}/>)
	}
  const { itfDataType, itfDataPath, itfDataCount, itfDataDefinitions, addItfDef } = props;
	return (
		<form>
			<div style={{ marginBottom: '20px' }}>
				<h5>接口数据类型</h5>
				<Select value={itfDataType} style={{ width: '100%' }} onChange={handleChange}>
					<Option key={0} value='single'>单条数据</Option>
					<Option key={1} value='plural'>列表数据</Option>
				</Select>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<h5>接口路径名</h5>
				<Input value={itfDataPath} placeholder="接口路径名" onChange={handleInput}/>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<h5>接口数据定义</h5>
				<Button onClick={addItfDef} type="primary" style={{ marginBottom: 16 }}>
        	<Icon type="plus" />新增接口数据字段
      	</Button>
      	{ renderItems(itfDataDefinitions)}
			</div>
		</form>
	)
}

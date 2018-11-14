import { Button, Input, Select, Icon } from 'antd';

import Item from './item';

const { Option } = Select;

export default (props) => {
	function handleChange() {}
	function handleInput() {}
	function addInterfaceDataType() {}
	function changeInterfaceData() {}
	function renderItems(interfaceDataTypes) {
		return interfaceDataTypes.map((item, key) => <Item key={key} {...item} handleChange={changeInterfaceData}/>)
	}
	return (
		<form>
			<div style={{ marginBottom: '10px' }}>
				<h5>接口数据类型</h5>
				<Select defaultValue='single' style={{ width: '100%' }} onChange={handleChange}>
					<Option key={0} value='single'>列表数据</Option>
					<Option key={1} value='plural'>单条数据</Option>
				</Select>
			</div>
			<div style={{ marginBottom: '10px' }}>
				<h5>接口路径名(列表数据请用复写形式，ps:加s)</h5>
				<Input placeholder="接口路径名" onChange={handleInput}/>
			</div>
			<div style={{ marginBottom: '10px' }}>
				<h5>接口数据定义</h5>
				<Button onClick={addInterfaceDataType} type="primary" style={{ marginBottom: 16 }}>
        	<Icon type="plus" />新增接口数据字段
      	</Button>
      	{ renderItems(props.interfaceDataTypes)}
			</div>
		</form>
	)
}
import React, { Component } from 'react';
import { Input, Select, InputNumber } from 'antd';

import Types from './types';

const { Option }  = Select;

export default class Item extends Component {
	constructor(props){
		super(props);
		const { valType: { main } } = props;
		let selectedIndex;
		Types.forEach((item, index) => {
			if (item.name === main) {
				selectedIndex = index;
			}
		});
		this.state = {
			selectedIndex
		}
	}

	handleChange = (val, option) => {
		this.setState({
			selectedIndex: parseInt(option.key, 10)
		});
		this.props.handleChange('valType', { main: val, child: null });
	}

	handleChangeChildren = (val) => {
		const { valType } = this.props;
		this.props.handleChange('valType', Object.assign(valType, { child: val }));
	}

	renderChildren() {
		const { valType } = this.props;
		const { selectedIndex } = this.state;
		return (
			<Select value={valType.child} onChange={this.handleChangeChildren} style={{ width: '200px', float: 'right' }}>
				{
					Types[selectedIndex].children.map((item, index) => <Option key={index} value={item.name}>{item.cname}</Option>)
				}
			</Select>
		)
	}

	renderMinMax() {
		const { min, max } = this.props;
		return (
			<div className='min-and-max'>
				<div style={{ display: 'inline-block', marginTop: '10px' }}>
					<span>最小值</span>
					<InputNumber value={min} onChange={ this.props.handleChange.bind(null, 'min') }/>
				</div>
				<div style={{ display: 'inline-block', marginTop: '10px', marginLeft: '10px' }}>
					<span>最大值</span>
					<InputNumber value={max} onChange={ this.props.handleChange.bind(null, 'max') }/>
				</div>
			</div>
		)
	}

	handeInput = (key, e) => {
		const value = e.target.value;
		this.props.handleChange(key, value);
	}

	render() {
		const { selectedIndex } = this.state;
		const { valType, keyName } = this.props;
		return (
			<div style={{ margin: '20px 0' }}>
				<div>
					<h5>字段名</h5>
					<Input placeholder='字段名' value={keyName} onChange={this.handeInput.bind(null, 'keyName')} />
				</div>
				<div>
				<h5>字段类型</h5>
				<Select value={valType.main} onChange={this.handleChange} style={{ width: '200px' }}>
					{
						Types.map((item, index) => <Option key={index} value={item.name}>{item.cname}</Option>)
					}
				</Select>
				{
					selectedIndex !== null && Types[selectedIndex] && Types[selectedIndex].children
						?	this.renderChildren()
						: null
				}
				</div>
				{
					selectedIndex !== null && Types[selectedIndex] && Types[selectedIndex].min
						?	this.renderMinMax()
						: null
				}
			</div>
		)
	}

}

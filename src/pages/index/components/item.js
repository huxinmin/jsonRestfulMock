import React, { Component } from 'react';
import { Input, Select, InputNumber } from 'antd';

import Types from './types';

const { Option }  = Select;

export default class Item extends Component {
	constructor(props){
		super(props);
		const { dataType: { main } } = props;
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
		const { path } = this.props;
		this.props.handleChange(path, 'dataType', { main: val, children: null });
	}

	handleChangeChildren = (val) => {
		const { dataType, path } = this.props;
		this.props.handleChange(path, 'dataType', Object.assign(dataType, { children: val }));
	}

	renderChildren() {
		const { dataType } = this.props;
		const { selectedIndex } = this.state;
		return ( 
			<Select value={dataType.children} onChange={this.handleChangeChildren}>
				{
						Types[selectedIndex].children.map((item, index) => <Option key={index} value={item.name}>{item.cname}</Option>)
				}
			</Select>
		)
	}

	renderMinMax() {
		const { min, max, path } = this.props;
		return (
			<div className='min-and-max'>
				<div>
					<span>最小值</span>
					<InputNumber value={min} onChange={ this.props.handleChange.bind(null, path, 'min') }/> 
				</div>
				<div>
					<span>最大值</span>
					<InputNumber value={max} onChange={ this.props.handleChange.bind(null, path, 'max') }/> 
				</div>
			</div>
		)
	}

	handeInput = (key, e) => {
		const value = e.target.value;
		const { path } = this.props;
		this.props.handleChange(path, key, value);
	}

	render() {
		const { selectedIndex } = this.state;
		const { dataType, name, title } = this.props;
		return (
			<div className='intfa-test-item'>
				<h5>{title}</h5>
				<div>
					<span>字段名</span>
					<Input placeholder='字段名' value={name} onChange={this.handeInput.bind(null, 'name')} />
				</div>
				<div>
				<span>字段类型</span>
				<Select value={dataType.main} onChange={this.handleChange}>
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
import React from 'react';
import { connect } from 'react-redux';
import { autoAdd, autoDel } from '../action/autoAddNumber';
import Layout from './Layout.react';
import DragBlock from './DragBlock.react';
@connect((store)=>{
	return {
		num: store.addNumberStaff.num,  //all these variables is props
	};
})
export default class Timer extends React.Component{
	
	componentWillMount(){
		let self = this;
		setInterval(function(){
			//self.props.dispatch(autoAdd(self.props.num));
			self.props.dispatch(autoAdd(self.props.num));
		}, 1000)
	}

	render(){
		return (<div>
			<span>{this.props.num}</span>
			<Layout />
			<DragBlock />
		</div>);
	};
}
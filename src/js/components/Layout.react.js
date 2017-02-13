import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../action/userActions';
import Timer from './Timer.react';
@connect((store)=>{
	return {
		user: store.worker.userList,  //all these variables is props
		fetchStatus: store.worker.fetchStatus
	};
})
export default class Layout extends React.Component{

	fetchRequest(){
		this.props.dispatch(fetchUser())
	}

	renderUserList(){
		let list = [];
		if(this.props.fetchStatus == null){
			return <div>no data</div>
		}
		if (this.props.fetchStatus == 'pending'){
			return <div>pending...</div>
		}
		else {
			this.props.user.map((key, value)=>{
			list.push(<div key={key.id}>{key.id}</div>)
		})
		return list;
		}

	}

	render(){
		return(
			<div>
				<div onClick={this.fetchRequest.bind(this)}> load sth</div>
				<div>{this.renderUserList()}</div>
			</div>
			)
	}
}
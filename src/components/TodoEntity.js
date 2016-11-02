import React,{Component} from 'react';


export default class TodoEntity extends Component{
	render(){
		const {key, title, isDone} = this.props.todo; 

		return (
			<div>
				<ul>
					<br/>
						<li key={key}> Todo {key} : {title}</li>
						<li>isDone : {""+isDone}</li>
					<br/>
				</ul>
			</div>
			);
		}
	}

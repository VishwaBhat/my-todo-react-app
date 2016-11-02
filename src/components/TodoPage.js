import React,{Component} from 'react';
import TodoEntity from './TodoEntity'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'
export default class TodoPage extends Component{	
	constructor(){
		super()
		this.state = { todoList : TodoStore.getAll()};
	}

	componentWillMount(){
		TodoStore.on("change",() => {
			this.setState({ todoList : TodoStore.getAll()})
		})
	}

	create(t){
		console.log(t)
		TodoActions.createTodo(Date.now());
	}

	render(){
		const todoComponents = this.state.todoList.map( element => <TodoEntity key={element.id} todo={element} />);
		return (<div>
				 {todoComponents}
				 <button name="Create" onClick={this.create.bind(this)}> Create</button>
				 </div>
				); 
	}

}	
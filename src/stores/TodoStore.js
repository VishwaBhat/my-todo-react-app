import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/TodoDispatcher'

class TodoStore extends EventEmitter{ 
	
	constructor(){
		super()
		this.todos =  [
			{ id : 1 , title : 'Play with React JS', isDone : true },
			{ id : 2 , title : 'Build Skillr ^ Rock it!', isDone : false },
			];
	}

	create(title){
		const id = Date.now()
		this.todos.push({id, title, isDone:false});
		this.emit("change");
	}

	handleActions(action){
		switch(action.type){
			case "CREATE" : this.create(action.title); break;
			default : break;
		}
	}

	getAll() {
		return this.todos
	}
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore;

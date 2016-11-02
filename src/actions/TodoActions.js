import dispatcher from '../dispatcher/TodoDispatcher';

export default {
	createTodo(text){
		dispatcher.dispatch({ type : 'CREATE', title : text });
	},

	 deleteTodo(id){
		dispatcher.dispatch({ type : 'DELETE' , id });
	}

}


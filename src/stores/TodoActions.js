import dispatcher from '../dispatcher/TodoDispacther'

export default TodoActions{
	createTodo(text){
		dispatcher({ type : 'CREATE', title : text });
	},

	deleteTodo(id){
		dispatcher({ type : 'DELETE' , id });
	}
}
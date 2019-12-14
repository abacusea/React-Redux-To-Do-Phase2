import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, SHOW_ALL, 
	SHOW_COMPLETED, SHOW_ACTIVE } from './actionsType'

let TodoId = 2

export const addTodo = text => ({
    type: ADD_TODO,
    todoId: TodoId++,
    todoText: text,
    completed: false,
    isVisible: true
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    todoId: id
})

export const editTodo = id => ({
	type: EDIT_TODO,
	todoId: id,
    todoText: '',
	completed: false,
	isVisible: true
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    todoId: id
})

export const showAll = () => {
  return {
    type: SHOW_ALL
  }
}

export const showActive = () => {
  return {
    type: SHOW_ACTIVE
  }
}

export const showCompleted = () => {
  return {
    type: SHOW_COMPLETED
  }
}

{ /* User interacts with UI, triggers an action. Here, the actions creators 
that are functions that create actions */}
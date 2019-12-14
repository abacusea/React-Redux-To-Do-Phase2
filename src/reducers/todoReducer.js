import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/actionsType'


const todos = (state=[], action) => {
  switch (action.type){
    case ADD_TODO:
    	const allItems= [
        ...state,{
          todoId: action.todoId,
          todoText: action.todoText,
          completed: action.completed,
          isVisible: action.isVisible
        }
    	]
      const makeItVisible = allItems.map(item => {return {...item,isVisible: true}})
      return makeItVisible
    case TOGGLE_TODO:
      return (
        state.map((item) => {
          return (
            (item.todoId === action.todoId) ? {...item, completed: !item.completed} 
            : item
          )
        }
      ))

    case EDIT_TODO:
      return (
        state.map((item) => {
          return (
            (item.todoId === action.todoId) ? {
              ...item,
              todoId: action.todoId,
              todoText: action.todoText,
              completed: action.completed,
              isVisible: action.isVisible
            } : item
          )
        })
      )

    case SHOW_ACTIVE:
    	const activeList = state.map((item) => {
        return (
          (item.completed) ? {...item, isVisible: false}
          : {...item, isVisible: true}
        )
       })
      return activeList;

    case SHOW_COMPLETED:
      const completedList = state.map((item) => {
        return (
          (!item.completed) ? {...item, isVisible: false}
          : {...item, isVisible: true}
        )
       })
      return completedList ;

    case SHOW_ALL:
      const totalList = state.map((item) => {
        return (
          {...item, isVisible: true}
        )
       })
      return totalList  ;

    case DELETE_TODO:
      return state.filter(item => item.todoId !== action.todoId)
      
    default:
      return state
  }
}

export default todos

{ /* Create one reducer for manage the todo state */}    
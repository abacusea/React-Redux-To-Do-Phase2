import React, { Component, Fragment, } from "react";
import "./index.css";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo, editTodo, showAll, showActive, showCompleted } from "../actions/itemActions";
 

class ListItem extends Component {

  handleCheckboxClick = (id)=> {
    this.props.dispatch(toggleTodo(id));
  }

  showActive = () => {
    this.props.dispatch(showActive());
  }

  showCompleted = () => {
    this.props.dispatch(showCompleted());
  }

  showAll = () => {
    this.props.dispatch(showAll());
  }


  handleDeletClick= (id) =>  {
    this.props.dispatch(deleteTodo(id));
  }

  setUpdate = (id) => {
    this.props.dispatch(editTodo(id));
  }

	render() {
    const todos = this.props.todos;
    const visibleElements = todos.filter(item => item.isVisible);
    const itemList = visibleElements.length > 0 ? (
      todos.map((item, index) => {
        console.log(item, index);
        return (
          item.isVisible &&
            <div className="item">
              <input type="checkbox" defaultchecked={item.completed}
              onClick={this.handleCheckboxClick.bind(this, item.todoId)} />

              <p>
                <input type="text" className="text2" id={item.todoId} value={item.todoText.text} 
                style={{ textDecoration: item.completed ? "line-through" : "none" , 
                textDecorationColor: item.completed ? "red" : "none" }}
                onChange={this.setUpdate.bind(this, item.todoId)}
                 />
              </p>
              
              <button className="btnd" type="button" onClick={this.handleDeletClick.bind(this, item.todoId)}>
                Delete
              </button>
            </div>
        )
      })
    ) : (
      <div className="item">
        { todos.length === 0  ? <p>TODO list is empty</p> :
          ( visibleElements.length === 0 ? <p>No results found for this filter</p> : '' )
        }
      </div>
    )

		return (
      <div>
        { itemList}
        <div className='filter-container'> Filters:
          <input type='radio' className='filter-input' name='filter' id='allFilter'
          onClick={this.showAll} disabled={todos.length === 0 } />
          <label for='allFilter' className='filter-label'>
            All
          </label>

          <input type='radio' className='filter-input' name='filter' id='activeFilter'
          onClick={this.showActive} disabled={todos.length === 0 } />
          <label for='activeFilter' className='filter-label' >
            Active
          </label>

          <input type='radio' className='filter-input' name='filter' id='completedFilter'
          onClick={this.showCompleted} disabled={todos.length === 0  } />
          <label  for='completedFilter' className='filter-label' >
            Completed
          </label>
        </div>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return  {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ListItem)
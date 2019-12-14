import React, { Component } from 'react'
import './index.css';
import { connect } from 'react-redux'
import { addTodo } from '../actions/itemActions'

class AddItem extends Component {
	state = {
    text: ''
  }

  handleInput = e => {
    this.setState({
        text: e.target.value
    });
  }


  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      text: this.state.text
    };

    this.props.addTodo(newItem);
    this.setState({
      text:''
    });
  }

  render() {
    const text= this.state.text;
    return (
    	<form className="item" onSubmit={this.onSubmit}>

				<input type="text" placeholder="What needs to be done?"
				  className="text1"
          name='todoText'
				  value={this.state.text} 
				  onChange={this.handleInput} 
          autocomplete="off"  
				/>

				<button className="btnadd" type="submit">
					Add
				</button>
			</form>
    )
  }
}

const mapStateToProps= (state) => {
  return  {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(AddItem)
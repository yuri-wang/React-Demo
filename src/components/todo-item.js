import React, { Component } from 'react';

class TodoItem extends Component {
  todoMessage() {
    if (this.props.completed) {
       return (<strike>{this.props.Nickname}</strike>);
    } else {
      return this.props.Nickname;
    }
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.actions.deleteTodo(this.props.UserID)
  }

  handleToggle(event) {
    this.props.actions.toggleTodo(this.props)
  }

  render() {
    return (
      <li className="todo-item">
        {this.todoMessage()}
        <button className="btn btn-xs btn-danger btn-circle pull-right" onClick={this.handleDelete.bind(this)}>&times;</button>
      </li>
    );
  }
}

export default TodoItem;

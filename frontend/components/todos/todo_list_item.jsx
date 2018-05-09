import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );
     this.props.receiveTodo(toggledTodo);
  }

  render() {
    return (
      <li>
        <p>title: {this.props.todo.title}</p>
        <p>body: {this.props.todo.body}</p>
        <p>done: {this.props.todo.done}</p>
        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
          Remove Todo
        </button>
        <button
            onClick={ this.toggleTodo }>
          { this.props.todo.done ? "done!" : "not yet"}
        </button>
      </li>
    );
  }
}

export default TodoListItem;

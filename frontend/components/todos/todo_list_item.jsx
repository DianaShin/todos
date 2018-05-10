import React from 'react';
import merge from 'lodash/merge';
import TodoDetailView from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.state = { detail: true };
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

  toggleDetail(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail =  <TodoDetailView todo={this.props.todo} />;
    }
    return (
      <li className="todo-list-item">
        <p onClick={this.toggleDetail}>title: {this.props.todo.title}</p>
        <button
          onClick={ this.toggleTodo }>
          { this.props.todo.done ? "done!" : "not yet"}
        </button>

        <p>body: {this.props.todo.body}</p>
        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
          Remove Todo
        </button>
        { detail }
      </li>
    );
  }
}

export default TodoListItem;

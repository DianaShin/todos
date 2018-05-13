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
          <p className="todo-title" onClick={this.toggleDetail}>title: {this.props.todo.title}</p>
            <p className="todo-done"> done?&nbsp;&nbsp;&nbsp;
              <button
                className={ this.props.todo.done ? "done" : "undone" }
                onClick={ this.toggleTodo }>
                { this.props.todo.done ? "done!" : "not yet"}
              </button>
              <button
                className="remove"
                onClick={() => this.props.removeTodo(this.props.todo.id)}>
                Remove Todo
              </button>
            </p>
        <p className="todo-body">deets: {this.props.todo.body}</p>
        { detail }
      </li>
    );
  }
}

export default TodoListItem;

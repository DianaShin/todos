import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-detail-view">
        <p>body: {this.props.todo.body}</p>
        <button onClick={() => this.props.removeTodo(this.props.todo.id)}>
          Remove Todo
        </button>
      </div>
    );
  }
}

export default TodoDetailView;

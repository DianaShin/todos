import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>title: {this.props.todo.title}</p>
        <p>body: {this.props.todo.body}</p>
        <p>done: {this.props.todo.done}</p>
      </li>
    );
  }
}

export default TodoListItem;

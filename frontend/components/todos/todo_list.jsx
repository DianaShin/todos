import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, idx) =>
      <TodoListItem
        todo={todo}
        key={idx}
      />);
    return (
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList;

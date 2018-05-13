import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const todos = this.props.todos.map((todo, idx) =>
      <TodoListItem
        todo={todo}
        key={idx}
        receiveTodo={this.props.receiveTodo}
        removeTodo={this.props.removeTodo}
      />);

    return(
      <div>
        <header className="header">
          Redux Todo App
        </header>
        <div className="todo-list">
          <ul className="todo-list-items">
            { todos}
          </ul>
          <TodoListForm
            receiveTodo={ this.props.receiveTodo }/>
        </div>
      </div>
    );
  }
}

export default TodoList;




// note: destructure props at the beginning of render function so you don't make mistake like you did by forgetting this.props!

// const { todos, receiveTodo } = this.props;
// const todoItems = todos.map(todo => (
//     <TodoListItem
//       key={`todo-list-item${todo.id}`}
//       todo={todo}
//       receiveTodo={ receiveTodo } />
//   )
// );

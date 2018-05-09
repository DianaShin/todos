import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form'

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
      />);

    return(
      <div>
        <ul className="todo-list">
          { todos}
        </ul>
        <TodoListForm receiveTodo={ this.props.receiveTodo }/> // I was not able to see added todo on page, beause I forgot this.props here!!!!!
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

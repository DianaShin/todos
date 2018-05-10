import React from 'react';
import StepList from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-detail-view">
        <p>body: {this.props.todo.body}</p>
        <StepList  />
      </div>
    );
  }
}

export default TodoDetailView;

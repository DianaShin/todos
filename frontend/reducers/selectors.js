export const allTodos = (state) => {
    let arrTodos = [];
    Object.keys(state.todos).forEach(key => arrTodos.push(state.todos[key]));
    return arrTodos;
};

export const stepsByTodoId = ({ steps }, { todo_id }) => {
  const stepsByTodoIdArr = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    console.log(stepId);
    console.log(todo_id);
    console.log(steps[stepId].todoId);
    if (steps[stepId].todoId === todo_id) stepsByTodoIdArr.push(step);
  });
  return stepsByTodoIdArr;
};

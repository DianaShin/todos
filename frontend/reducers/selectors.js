export const allTodos = (state) => {
    let arrTodos = [];
    Object.keys(state.todos).forEach(key => arrTodos.push(state.todos[key]));
    return arrTodos;
};

export const stepsByTodoId = ({ steps }, todo_id) => {
  const stepsByTodoIdArr = [];
  Object.keys(steps).forEach(stepId => {
    const step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoIdArr.push(step);
  });
  return stepsByTodoIdArr;
};

// export const stepsByTodoId = (state, todoId) => {
//   let stepsArr = [];
//   Object.keys(state.steps).forEach(step => {
//     if (step.todoId === todoId) {
//       stepsArr.push(step);
//     }
//   });
//   return stepsArr;
// };

export const allTodos = (state) => {
    let arrTodos = [];
    Object.keys(state.todos).forEach(key => arrTodos.push(state.todos[key]));
    return arrTodos;
};

export const stepsByTodoId = (state, todoId) => {
  let stepsArr = [];
  Object.keys(state.steps).forEach(step => {
    if (step.todo_id === todoId) {
      stepsArr.push(step);
    }
  });
  return stepsArr;
};

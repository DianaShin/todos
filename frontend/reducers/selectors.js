const allTodos = (state) => {
    let arrTodos = [];
    Object.keys(state.todos).forEach(key => arrTodos.push(state.todos[key]));
    return arrTodos;
};

export default allTodos;

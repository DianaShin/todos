import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
// import App from '../frontend/components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <Root />, document.getElementById('content'));
});

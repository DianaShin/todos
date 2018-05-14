import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
// import App from '../frontend/components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

window.store = configureStore;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  ReactDOM.render( <Root store={store}/>, document.getElementById('content'));
});

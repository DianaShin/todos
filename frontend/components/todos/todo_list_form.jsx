import React from 'react';
import uniqueId from '../util';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId()});
    this.props.receiveTodo(todo);
    console.log(todo);
    this.setState({
      title: '',
      body: '',
      done: false
    });
  }

  render() {
    return (
      <form
        className="todo-list-form"
        onSubmit={this.handleSubmit}>
      <header className="todo-form-title">Make a Todo!!</header>
      <div className="form-content">
        <label> title:
          <br />
          <input
            className="todo-form"
            type="text"
            value={this.state.title}
            placeholder="make a todo"
            onChange={this.updateValue('title')}
        />
        </label>
        <br />
        <label> deets:
          <br />
          <input
            className="todo-form"
            type="text"
            value={this.state.body}
            placeholder="be specific!"
            onChange={this.updateValue('body')}
          />
        </label>
        <br />
        <button
          className="create"
          type="submit">Create Todo!</button>
        </div>
      </form>
    );
  }
}

export default TodoListForm;

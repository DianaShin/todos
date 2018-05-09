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
      <form onSubmit={this.handleSubmit}>
      <label> Title:
        <input
          type="text"
          value={this.state.title}
          placeholder="make a todo"
          onChange={this.updateValue('title')}
      />
      </label>
      <label> Body:
        <input
          type="text"
          value={this.state.body}
          placeholder="be specific so you can accomplish your todo"
          onChange={this.updateValue('body')}
        />
      </label>
      <button type="submit">Create Todo!</button>
      </form>
    )
  }
}

export default TodoListForm;

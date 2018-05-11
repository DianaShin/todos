import React from 'react';
import uniqueId from '../util';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      done: false,
      todoId: this.props.todo_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
  e.preventDefault();
  const step = Object.assign({}, this.state, {id: uniqueId()});
  this.props.receiveStep(step);
  this.setState({
    title: ""
  });
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            ref="title"
            value={this.state.title}
            onChange={this.update('title')}
            required />
        </label>
        <button
          type="submit"
          >Create Step!</button>
      </form>
    );
  }
}

export default StepForm;

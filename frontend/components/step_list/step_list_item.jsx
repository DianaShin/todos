import React from 'react';
import merge from 'lodash/merge';
import StepForm from './step_form';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    e.preventDefault();
    const toggledStep = merge({}, this.props.step, { done: !this.props.step.done});
    this.props.receiveStep(toggledStep);
  }

  render() {
    return (
      <li className="step-list-item">
        <div className="steps">
          <p> { this.props.step.title}</p>
          <p> {this.props.step.body} </p>
          <button
            className={ this.props.step.done ? "done" : "undone" }
            onClick = {this.toggleStep}>
              { this.props.step.done ? "Done" : "Not yet"}
          </button>
          <button onClick={ () =>this.props.removeStep(this.props.step.id) }>
            Delete Step!
          </button>
        </div>
      </li>
    );
  }
}

export default StepListItem;

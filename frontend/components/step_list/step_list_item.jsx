import React from 'react';
import merge from 'lodash/merge';

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
        <div>
          <h3> { this.props.step.title}</h3>
          <p> {this.props.step.body} </p>
          <button onClick = {this.toggleStep}>
              { this.props.step.done ? "Done" : "Not yet"}
          </button>
          <button onClick={ this.props.removeStep }>
            Delete Step!
          </button>
        </div>
      </li>
    );
  }
}

export default StepListItem;

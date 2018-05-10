import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="step-list-item">
        <div>
          <h3> { this.props.step.title}</h3>
          <p> {this.props.step.body} </p>
        </div>
      </li>
    );
  }
}

export default StepListItem;

import React from 'react';
import StepListItem from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stepItems = this.props.steps.map(step => {
      return <StepListItem
              todo_id={this.props.todo_id}
              key={step.id}
              step={step} />;
          });
    return (
      <div>
        <ul>
          { stepItems }
        </ul>
        <StepForm
          todo_id={this.props.todo_id}
          receiveStep={this.props.receiveStep}
          />
      </div>
    );
  }
}

export default StepList;

import React from 'react';
import StepListItem from './step_list_item_container';

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stepItems = this.props.steps.map(step => {
      return <StepListItem
              key={step.id}
              step={step} />;
          });
    return (
      <ul>
        { stepItems }
      </ul>
    );
  }
}

export default StepList;

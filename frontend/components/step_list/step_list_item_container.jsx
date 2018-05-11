import React from 'react';
import { connect } from 'react-redux';
import StepListItem from './step_list_item';
import { receiveStep, removeStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, {step}) => {
  return {
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: id => dispatch(receiveStep(id))
  };
};

export default connect(null, mapDispatchToProps)(StepListItem);

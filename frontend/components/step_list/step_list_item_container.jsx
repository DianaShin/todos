import React from 'react';
import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import StepListItem from './step_list_item';
import { receiveStep, removeStep } from '../../actions/step_actions';

const mapStateToProps = (state, todo_id ) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id: todo_id.todo_id
  //todoId //don't forget to map this id to props
});

const mapDispatchToProps = (dispatch, {step}) => {
  return {
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: id => dispatch(receiveStep(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepListItem);

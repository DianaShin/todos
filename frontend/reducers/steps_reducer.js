import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';

const initialStepsState = {
    1: { // this is the step with id = 1
      id: 1,
      title: 'walk to store',
      done: false,
      todoId: 1
    },
    2: { // this is the step with id = 2
      id: 2,
      title: 'buy soap',
      done: false,
      todoId: 1
    }
  };

const stepsReducer = (state = initialStepsState, action) => {
  Object.freeze(state);
  let nextState = {};
  switch(action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach( step => {
        nextState[step.id] = step;
      });
      return nextState;
    case RECEIVE_STEP:
      const newStep = {[action.step.id]: action.step};
      nextState = merge({}, state, newStep);
      return nextState;
    case REMOVE_STEP:
      nextState = merge({}, state);
      delete nextState[action.step.id];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;

export const RECIEVE_STEPS = 'RECIEVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const receiveSteps = (steps) => {
  return {
    type: RECIEVE_STEPS,
    steps
  };
};

export const recieveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

export const removeStep = (id) => {
  return {
    type: REMOVE_STEP,
    id
  };
};

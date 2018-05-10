import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveSteps } from '../../actions/step_actions';
import StepList from './step_list';

const mapStateToProps = (state, { todoId }) => ({
  steps: stepsByTodoId(state, todoId),
  todoId
  //todoId //don't forget to map this id to props
});

const mapDispatchToProps = dispatch => ({
  receiveSteps: (step) => dispatch(receiveSteps(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);

import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/step_actions';
import StepList from './step_list';

const mapStateToProps = (state, todo_id ) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id: todo_id.todo_id
  //todoId //don't forget to map this id to props
});

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);

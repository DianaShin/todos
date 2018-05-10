import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { receiveSteps, removeTodo } from '../../actions/todo_actions';

const mapDispatchToProps = dispatch => ({
  receiveSteps: (steps) => dispatch(receiveSteps),
  removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);

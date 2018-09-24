import { createAction, combineActions } from 'store/helpers';
import * as ActionTypes from './action_types';
import { getTodos } from './fetch';

const fetchingTodos = createAction(ActionTypes.FETCHING_TODOS);
const fnFetchTodos = createAction(ActionTypes.FETCH_TODOS, getTodos);
const fetchTodos = combineActions(fetchingTodos, fnFetchTodos);

const toggleCheckTodo = createAction(ActionTypes.TOGGLE_CHECK_TODO);
const changeText = createAction(ActionTypes.CHANGE_TEXT);
const submitTodo = createAction(ActionTypes.SUBMIT_TODO);

export default {
  fetchTodos,
  toggleCheckTodo,
  changeText,
  submitTodo,
};

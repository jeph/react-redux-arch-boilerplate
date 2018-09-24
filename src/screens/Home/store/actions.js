import { createAction, combineActions } from 'store/helpers';
import * as ActionTypes from './action_types';
import { getTodos } from './fetch';

const fetchingTodos = createAction(ActionTypes.FETCHING_TODOS);
const fnFetchTodos = createAction(ActionTypes.FETCH_TODOS, getTodos);
const fetchTodos = combineActions(fetchingTodos, fnFetchTodos);

export default {
  fetchTodos,
};

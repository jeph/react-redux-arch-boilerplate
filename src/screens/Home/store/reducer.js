import * as ActionTypes from './action_types';
import { createReducer } from 'store/helpers';
import initialState from './state';


const onFetchingTodos = (state) => {
  state.loading = true;
  return state;
};

const onFetchTodos = (state, action) => {
  state.loading = false;
  state.loaded = true;
  state.todos = action.payload;
  return state;
};

const onSortTodos = (state, action) => {
  state.todos = state.todos.sort((a, b) => {
    if (a.completed) {
      return 1;
    }
    return -1;
  });
  return state;
}

const actions = {};
actions[ActionTypes.FETCHING_TODOS] = onFetchingTodos;
actions[ActionTypes.FETCH_TODOS] = onFetchTodos;
actions[ActionTypes.SORT_TODOS] = onSortTodos;

export default createReducer(actions, initialState);

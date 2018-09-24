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

const actions = {};
actions[ActionTypes.FETCHING_TODOS] = onFetchingTodos;
actions[ActionTypes.FETCH_TODOS] = onFetchTodos;

export default createReducer(actions, initialState);

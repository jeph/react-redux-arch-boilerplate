import * as ActionTypes from './action_types';
import { createReducer } from 'store/helpers';
import initialState from './state';


const onFetchingTodos = (state) => {
  state.loading = true;
  state.loaded = false;
  return state;
};

const onFetchTodos = (state, action) => {
  state.loading = false;
  state.loaded = true;
  state.todos = action.payload;
  return state;
};

const onToggleCheckTodo = (state, action) => {
  const payload = action.payload;
  // destruct and assign (immutable state)
  const todos = [...state.todos];
  // We're just simulating a POST call and changing a todo state.
  const index = payload.id - 1;
  // magic
  todos[index].completed = payload.checked;
  state.todos = todos;
  return state;
}

const onChangeText = (state, action) => {
  const payload = action.payload;
  state.todo = payload;
  return state;
}

const onSubmitTodo = (state) => {
  // Please forgive me, this is for demo purposes only.
  const todos = [...state.todos];
  todos.push({
    id: todos.length + 1,
    title: state.todo,
    completed: false,
  });
  // clean
  state.todo = '';
  state.todos = todos;
  return state;
}

const actions = {};
actions[ActionTypes.FETCHING_TODOS] = onFetchingTodos;
actions[ActionTypes.FETCH_TODOS] = onFetchTodos;
actions[ActionTypes.TOGGLE_CHECK_TODO] = onToggleCheckTodo;
actions[ActionTypes.CHANGE_TEXT] = onChangeText;
actions[ActionTypes.SUBMIT_TODO] = onSubmitTodo;

export default createReducer(actions, initialState);

import { combineReducers } from 'redux';
import Home from 'screens/Home';

const rootReducer = combineReducers({
  [Home.name]: Home.reducer,
});

export default rootReducer;

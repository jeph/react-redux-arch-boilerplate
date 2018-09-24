

export const createReducer = (actions, initialState = {}) => {
  return (state = initialState, action) => {
    if (actions[action.type]) {
      const handler = actions[action.type];
      return {
        ...state,
        ...handler(state, action),
      };
    }
    return initialState;
  };
};

const dispatch = (fnDispatch, actionType, payload) => (
  fnDispatch({
    type: actionType,
    payload,
  })
);

export const createAction = (actionType, fn) => {
  return (args) => {
    return fnDispatch => {
      if (fn) {
        return fn(args)
          .then(payload => dispatch(fnDispatch, actionType, payload))
          .catch(err => dispatch(fnDispatch, actionType, err))
      }
      return dispatch(fnDispatch, actionType, args); 
    };
  }
};

export const combineActions = (...actions) => {
  return () => {
    const args = arguments;
    return fnDispatch => {
      actions.forEach(action => action(args)(fnDispatch));
    };
  }
};

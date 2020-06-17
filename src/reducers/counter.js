const initialState = {
  count: 0,
  totalcount: 0

};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        totalcount: state.totalcount +1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        totalcount: state.totalcount +1
      };
    case 'RESET':
      return {
        ...state,
        count: (state.count = newValue, state.totalcount = 0)
      };
    default:
      return state;
  }
}

export default counterReducer;
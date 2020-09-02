const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { type: "Added", payload: action.payload, date: Date.now() },
      ];
    }
    case "TOGGLE_TODO": {
      return [
        ...state,
        { type: "Toggled", payload: action.payload, date: Date.now() },
      ];
    }
    default:
      return state;
  }
};

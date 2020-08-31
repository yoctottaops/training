const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "TOGGLE_TODO": {
      const { id } = action.payload;
      return state.map((s) => (s.id === id ? { ...s, ["done"]: !s.done } : s));
    }
    default:
      return state;
  }
};

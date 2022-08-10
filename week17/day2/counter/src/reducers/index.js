const counterReducer = (state, action) => {
  console.log(state.count);
  switch (action.type) {
    case "INCREMENT":
      console.log(state, action.type);
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      console.log(state, action.type);
      return { ...state, count: state.count - 1 };

    default:
      return { ...state };
  }
};

export default counterReducer;

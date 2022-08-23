export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((event) => event.id !== action.payload);
    case "UPDATE":
      return state.map((event) =>
        event.id === action.payload.id ? action.payload : event
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
};

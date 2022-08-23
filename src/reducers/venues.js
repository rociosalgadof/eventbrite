export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_VENUES":
      return [...state, action.payload];
    default:
      return state;
  }
};

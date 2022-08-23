import * as api from "../api/index";

export const getTickets = (id) => async (dispatch) => {
  try {
    const { data } = await api.getTickets(id);
    dispatch({ type: "FETCH_TICKETS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

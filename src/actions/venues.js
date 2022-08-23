import * as api from "../api/index";

export const getVenues = (id) => async (dispatch) => {
  try {
    const { data } = await api.getVenues(id);
    dispatch({ type: "FETCH_VENUES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

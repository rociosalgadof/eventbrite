import axios from "axios";

const url = "https://hidden-cove-91103.herokuapp.com";

export const getEvents = () => axios.get(url);
export const createEvent = (event) => axios.post(url, event);
export const deleteEvent = (id) => axios.delete(`${url}/${id}`);
export const updateEvent = (id, event) => axios.post(`${url}/${id}`, event);
export const getVenues = (id) => axios.get(`${url}/venues/${id}`);

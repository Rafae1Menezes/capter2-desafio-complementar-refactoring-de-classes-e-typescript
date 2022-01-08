import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-gorestaurant.herokuapp.com/',
});

export default api;

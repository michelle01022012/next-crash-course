import axios from 'axios';

const API_KEY = 'YOUR_API_NINJAS_KEY'; // Get free key at api-ninjas.com
const BASE_URL = 'https://api-ninjas.com';

export const fetchCars = async (query = 'fast') => {
  const response = await axios.get(`${BASE_URL}?model=${query}&limit=6`, {
    headers: { 'X-Api-Key': API_KEY }
  });
  return response.data;
};

export const fetchCarDetails = async (make, model) => {
  const response = await axios.get(`${BASE_URL}?make=${make}&model=${model}`, {
    headers: { 'X-Api-Key': API_KEY }
  });
  return response.data[0];
};
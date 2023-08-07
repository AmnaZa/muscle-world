import axios from 'axios';
import API_KEY from '../Key/key';

const fetchData = async (muscle) => {
  const url = 'https://api.api-ninjas.com/v1/exercises';
  const params = { muscle };
  const headers = {
    "X-Api-Key": API_KEY // Import the API_KEY from key.js
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;

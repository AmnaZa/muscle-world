import axios from 'axios';
import API_KEY from '../Key/key';

const fetchData = async (muscle, searchTerm) => {
  const url = 'https://api.api-ninjas.com/v1/exercises';

  // Set the parameters for the API request
  const params = {
    muscle,
    q: searchTerm // Include the 'searchTerm' in the request as 'q'
  };

  const headers = {
    "X-Api-Key": API_KEY
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;

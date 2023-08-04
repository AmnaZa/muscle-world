import axios from 'axios';

const fetchData = async (muscle, apiKey) => {
  const url = 'https://api.api-ninjas.com/v1/exercises';
  const params = { muscle };
  const headers = {
    "X-Api-Key": apiKey
  };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    throw error;
  }

};

export default fetchData;

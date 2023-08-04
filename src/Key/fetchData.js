const axios = require('axios');

const fetchData = async (muscle, apiKey) => {
  const url = 'https://api.api-ninjas.com/v1/exercises';
  const params = { muscle };
  const headers = { 'b448fdbe00msh58110be92031f1ep131198jsnd977eb5c41de': apiKey };

  try {
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchData;

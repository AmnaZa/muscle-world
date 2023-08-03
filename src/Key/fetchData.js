// fetchData.js
const axios = require('axios');

const fetchData = (muscle, apiKey) => {
  return axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        'FJFpRD4M+a4ZukKbzMQW+A==EVZhMv1fEZTMuJ7V': apiKey,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

module.exports = fetchData;

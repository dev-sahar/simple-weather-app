import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e1d1646204ad185874c0ece91eb2a56f';

const fetchData = async (query) => {
  const response = await axios.get(url, {
    params: {
      q: query,
      units: 'metric',
      appid: API_KEY,
    },
  });

  const { data } = response;

  return data;
};

export default fetchData;

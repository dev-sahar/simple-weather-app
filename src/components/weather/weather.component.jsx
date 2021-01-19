import React, { lazy, useState } from 'react';

import fetchData from '../../api/axios';

import './weather.styles.css';

const Card = lazy(() => import('../card/card.component'));

const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const handleChange = (e) => setQuery(e.target.value);

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchData(query);

      setWeather(data);

      setQuery('');
    }
  };

  return (
    <div className='main-container'>
      <input
        type='text'
        placeholder='Search then press Enter ...'
        value={query}
        onChange={handleChange}
        onKeyPress={search}
        className='search'
      />
      {weather.main && <Card weather={weather} />}
    </div>
  );
};

export default Weather;

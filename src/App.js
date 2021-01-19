import React, { Suspense } from 'react';

import Weather from './components/weather/weather.component';
import Spinner from './components/spinner/spinner.component';

import './App.css';

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Weather />
    </Suspense>
  );
};

export default App;

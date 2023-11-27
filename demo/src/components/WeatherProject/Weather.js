// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; 
import SearchForm from './SearchForm';
import WeatherDisplay from './WeatherDisplay';
import './styles/Weather.css';
import { mockWeatherData } from './mock/mockData';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [apiBaseUrl] = useState(process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000');
  // Crea una instancia de axios-mock-adapter y pásale tu instancia de axios
  const mock = new MockAdapter(axios);

  // Configura el mock para interceptar solicitudes a `${apiBaseUrl}/weather`
  mock.onGet(`${apiBaseUrl}/weather`).reply(200, { mockWeatherData });

  const fetchWeatherDataMock = async (location) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/weather`);
      
      const filteredData = location
      ? response.data.mockWeatherData.filter(city => city.name.toLowerCase().includes(location.toLowerCase()))
      : response.data.mockWeatherData;
    
      setWeatherData(filteredData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherDataMock('Bogotá'); // Fetch initial weather data for City1

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchForm fetchWeatherData={fetchWeatherDataMock} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
};

export default Weather;

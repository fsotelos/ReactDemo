// src/mocks/mockApi.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mock = new MockAdapter(axios);

// Mock the API endpoint for fetching weather data
mock.onGet('/weather').reply(200, mockWeatherData);

// Optional: Mock the API endpoint for fetching weather data by city ID
mock.onGet(/\/weather\/\d+/).reply((config) => {
  const cityId = parseInt(config.url.substring(config.url.lastIndexOf('/') + 1));
  const cityData = mockWeatherData.find((city) => city.id === cityId);
  return cityData ? [200, cityData] : [404];
});
// WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      <h2>Weather Details</h2>
      {weatherData.map(city => (
        <div key={city.id}>
          <h3>{city.name}</h3>
          <p>Temperature: {city.main.temp}°C</p>
          <p>Humidity: {city.main.humidity}%</p>
          <p>Description: {city.weather[0].description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default WeatherDisplay;

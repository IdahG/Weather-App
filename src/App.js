import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; // Import SearchBar from components folder
import WeatherDisplay from './components/weatherDisplay'; // Import WeatherDisplay from components folder
import { fetchWeather } from './weatherService'; // Import fetchWeather from the same directory
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null); // Clear any previous errors
    setWeatherData(null); // Clear previous weather data
    try {
      const data = await fetchWeather(city);
      if (data) {
        setWeatherData(data);
      } else {
        setError('No weather data available for this city.');
      }
    } catch (error) {
      setError('An error occurred while fetching weather data. Please try again.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </header>
    </div>
  );
}

export default App;

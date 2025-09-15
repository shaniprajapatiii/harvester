import { useWeather } from "../contexts/WeatherContext";
import { useState, useEffect } from "react";
import { getWeatherAlert} from "../utils/weatherAlerts"; // Import the utility function  

export default function WeatherPage() {
  const { weatherData, city, loading, fetchWeather } = useWeather();
  const [searchCity, setSearchCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity.trim() !== "") {
      fetchWeather(searchCity);
      setSearchCity("");
    }
    // for seeing the fetched data in console uncomment below line
    // console.log(weatherData);
  };

  // Real-time date and time
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const today = currentTime.toLocaleDateString();
  const day = currentTime.toLocaleDateString(undefined, { weekday: 'long' });
  const time = currentTime.toLocaleTimeString();

  if (loading || !weatherData) return <div>Loading...</div>;

  const main = weatherData.list[0];
  const dailyData = weatherData.list.slice(0, 8); // Approximate today and next 3 days

  const alert = getWeatherAlert(main);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">{city}</h1>
        <p>{day}, {today} {time}</p>
        <p className="text-sm text-gray-600">{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</p>
      </div>

      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Search city"
          className="border p-2 rounded-l"
        />
        <button type="submit" className="bg-green-600 text-white px-4 rounded-r">Search</button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      <div className="bg-white p-4 rounded shadow mb-6">
        <h1 className="text-3xl font-bold mb-4">{city || "Loading..."}</h1>
        <h2 className="text-xl font-semibold mb-3">Current Weather</h2>
        <p>Temperature: {main.main.temp}°C</p>
        <p>Humidity: {main.main.humidity}%</p>
        <p>Wind Speed: {main.wind.speed} m/s</p>
        <p>Weather: {main.weather[0].description}</p>
        <p>Feels Like: {main.main.feels_like}°C</p>
        <p>Max Temp: {main.main.temp_max}°C</p>
        <p>Min Temp: {main.main.temp_min}°C</p>
        <p>Rain: {main.rain ? `${main.rain["3h"]} mm` : "0 mm"}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Important Forecasts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dailyData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <p><strong>{new Date(item.dt_txt).toLocaleDateString()}</strong></p>
              <p>Temp: {item.main.temp}°C</p>
              <p>Weather: {item.weather[0].description}</p>
              <p>Wind: {item.wind.speed} m/s</p>
              <p>Humidity: {item.main.humidity}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

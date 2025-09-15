import { useWeather } from "../contexts/WeatherContext";
import {getWeatherAlert} from "../utils/weatherAlerts"; // Import the utility function

// export default function WeatherCard() {
//   const { weather } = useWeather();

//   if (!weather) return <div>Loading Weather...</div>;

//   const alert = getWeatherAlert(weather);
//   const dateTime = new Date();

//   return (
//     <>
//     <div className="p-4 bg-white shadow rounded w-64 text-center">
//       <h3 className="text-lg font-semibold">{weather.name}</h3>
//       <p className="text-sm text-gray-500">{dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}</p>
//       <p>{weather.weather[0].description}</p>
//       <p>Temp: {weather.main.temp}°C</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//       <p>{alert}</p>
//     </div>
//     </>
//   );
// }

export default function WeatherCard() {
  const { weatherData, city, loading } = useWeather();

  if (loading || !weatherData) return null;

  const main = weatherData.list[0];

  return (
    <div className="bg-white p-3 rounded shadow max-w-sm mx-auto">
      <h3 className="font-bold text-lg">{city}</h3>
      <p>Temp: {main.main.temp}°C</p>
      <p>{main.weather[0].description}</p>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
}

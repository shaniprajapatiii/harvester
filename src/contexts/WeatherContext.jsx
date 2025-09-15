import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  const apiKey = "720929b68f00986cc5dd1cd6e07a5290";

  const fetchWeather = async (cityName, lat = null, lon = null) => {
    setLoading(true);
    try {
      let url;
      if (cityName) {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`;
      } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
      } else {
        return;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "200") {
        setWeatherData(data);
        setCity(data.city.name);
      } else {
        console.error("Error fetching weather:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    setLoading(false);
  };

  // Get user's location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(null, position.coords.latitude, position.coords.longitude);
        },
        () => {
          console.error("Geolocation permission denied.");
        }
      );
    }
  }, []);

  const value = {
    weatherData,
    city,
    loading,
    fetchWeather,
    setCity
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

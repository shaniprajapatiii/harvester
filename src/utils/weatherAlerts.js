// src/utils/weatherAlerts.js
export function getWeatherAlert(weather) {
  if (!weather || !weather.weather || weather.weather.length === 0) return "No alerts";

  const main = weather.weather[0].main.toLowerCase();
  const description = weather.weather[0].description.toLowerCase();

  if (main.includes("rain") || description.includes("rain")) {
    return "⚠️ Rain Alert! Carry protection.";
  }
  if (main.includes("storm") || description.includes("storm")) {
    return "⚠️ Storm Alert! Stay safe.";
  }
  if (main.includes("snow") || description.includes("snow")) {
    return "❄️ Snow Alert! Dress warmly.";
  }
  if (main.includes("clear") || description.includes("clear")) {
    return "☀️ Clear skies! Great weather.";
  }
  if (main.includes("cloud") || description.includes("cloud")) {
    return "☁️ Cloudy conditions.";
  }
  if (main.includes("fog") || description.includes("fog")) {
    return "🌫️ Foggy! Drive carefully.";
  }
  return "ℹ️ Weather looks normal.";
}

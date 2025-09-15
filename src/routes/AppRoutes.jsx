import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import CropPrediction from "../pages/CropPrediction";
import WeatherPage from "../pages/WeatherPage";

export default function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/predict" element={<CropPrediction />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

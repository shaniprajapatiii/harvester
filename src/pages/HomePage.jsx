import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import PredictionResult from "../components/PredictionResult";
import WeatherCard from "../components/WeatherCard";

export default function HomePage() {

  // Load the most recent prediction from localStorage
  const history = JSON.parse(localStorage.getItem("predictions") || "[]");
  const latestResult = history.length ? history[0] : null;

  return (
    <div className="pt-20">
      <Hero />

       {/* Show latest prediction card */}
      {latestResult && (
        <section className="py-12 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Latest Prediction</h2>
          {latestResult && <PredictionResult result={latestResult} history={history} />}
        </section>
      )}

      <div className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-2">Current Weather</h2>
        <WeatherCard />
      </div>

      <Features />
      <Footer />
    </div>
  );
}

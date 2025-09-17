export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Start Predicting Your Crop Yield</h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-6">
        Use advanced tools to optimize your farming, increase yield, and save resources efficiently.
      </p>
      <Link to="/signup" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">Get Started</Link>
    </section>
  );
}

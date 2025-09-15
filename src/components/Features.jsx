export default function Features() {
  const features = [
    "Increase yield",
    "Save resources",
    "Optimize farming techniques"
  ];

  return (
    <section className="py-12 bg-green-100 text-center px-4">
      <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded shadow hover:shadow-md">
            <h3 className="font-bold text-lg mb-2">{feature}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { useCrop } from "../contexts/CropContext";
import PredictionResult from "./PredictionResult";

export default function CropForm() {
  const { history, latestResult, addPrediction } = useCrop();
  const [formData, setFormData] = useState({
    cropType: "",
    areaSize: "",
    soilPH: "",
    soilNutrients: "",
    historicalYield: "",
    waterAvailability: ""
  });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with backend API call
    const newResult = {
      ...formData,
      predictedYield: Math.floor(Math.random() * 2000 + 500),
      date: new Date().toLocaleDateString()
    };

    addPrediction(newResult);

    // Create the object from formData and add additional fields
      console.log("Prediction Data Object:", newResult); // Check it in the browser console
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 grid gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">Crop Prediction</h2>

        <input type="text" name="cropType" placeholder="Crop Type" required className="p-2 border rounded"
           value={formData.cropType} onChange={handleChange} />
        <input type="number" name="areaSize" placeholder="Area Size (ha)" required className="p-2 border rounded"
           value={formData.areaSize} onChange={handleChange} />
        <input type="number" name="soilPH" placeholder="Soil pH" step="0.1" required className="p-2 border rounded"
           value={formData.soilPH} onChange={handleChange} />
        <input type="text" name="soilNutrients" placeholder="Soil Nutrients" required className="p-2 border rounded"
           value={formData.soilNutrients} onChange={handleChange} />
        <input type="number" name="historicalYield" placeholder="Historical Yield (kg)" required className="p-2 border rounded"
           value={formData.historicalYield} onChange={handleChange} />

        <select name="waterAvailability" required className="p-2 border rounded" value={formData.waterAvailability} onChange={handleChange}>
          <option value="">Water Availability</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Predict Yield</button>
      </form>

      <PredictionResult result={latestResult} history={history} />
    </div>
  );
}

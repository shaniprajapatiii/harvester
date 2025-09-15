import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function PredictionResult({ result, history }) {
  if (!result) return null;
  if (!history) history = [];

  return (
    <div className="bg-white rounded shadow p-6 mt-6 w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-center">Predicted Crop Yield</h3>

      {/* Display Numbers */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
        <p><span className="font-semibold">Crop:</span> {result.cropType}</p>
        <p><span className="font-semibold">Area:</span> {result.areaSize} hectares</p>
        <p><span className="font-semibold">Water Availability:</span> {result.waterAvailability}</p>
        <p><span className="font-semibold">Predicted Yield:</span> {result.predictedYield} kg</p>
      </div>

      {/* Historical Yield Graph */}
      {history && history.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-2">Prediction History</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={history}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="predictedYield" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

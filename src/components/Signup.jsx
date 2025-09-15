import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    region: "",
    language: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.password} onChange={handleChange} />
          <input type="text" name="region" placeholder="Region"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.region} onChange={handleChange} />
          <input type="text" name="language" placeholder="Preferred Language"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.language} onChange={handleChange} />
          <button type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
      </div>
    </div>
  );
}

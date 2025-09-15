import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Title */}
        <div className="text-xl font-bold text-green-700">HARVESTERS</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-green-700">
              Pages
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 bg-white border border-gray-200 rounded shadow-lg w-40">
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                <Link to="/predict" className="block px-4 py-2 hover:bg-gray-100">Crop Prediction</Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100">Signup</Link>
                <Link to="/weather" className="block px-4 py-2 hover:bg-gray-100">Weather</Link>
                {/* Add more links here as needed */}
              </div>
            )}
          </div>
        </nav>

        {/* Login/Signup buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
          <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Signup</Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="p-2 border rounded">
            ☰
          </button>
          {dropdownOpen && (
            <div className="absolute right-4 top-16 bg-white border border-gray-200 rounded shadow-lg w-40">
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Home</Link>
              <Link to="/predict" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Crop Prediction</Link>
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Login</Link>
              <Link to="/signup" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Signup</Link>
              <Link to="/weather" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Weather</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

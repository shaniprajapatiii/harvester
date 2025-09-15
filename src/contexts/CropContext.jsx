import React, { createContext, useContext, useState, useEffect } from "react";

// Create context
const CropContext = createContext();

// Provider
export function CropProvider({ children }) {
  const [history, setHistory] = useState([]);
  const [latestResult, setLatestResult] = useState(null);

  // Optional: fetch from backend API on mount
  useEffect(() => {
    // fetch("/api/user/predictions")
    //   .then(res => res.json())
    //   .then(data => {
    //     setHistory(data);
    //     if (data.length) setLatestResult(data[0]);
    //   });
  }, []);

  const addPrediction = (newResult) => {
    setLatestResult(newResult);
    setHistory((prev) => [newResult, ...prev]);
    // Optional: send to backend
    // fetch("/api/predictions", { method: "POST", body: JSON.stringify(newResult) })
  };

  return (
    <CropContext.Provider value={{ history, latestResult, addPrediction }}>
      {children}
    </CropContext.Provider>
  );
}

// Custom hook
export const useCrop = () => useContext(CropContext);

import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();

// Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (email, password) => {
    // Here you can integrate with API later
    console.log("Logging in with", email, password);
    setUser({ email });
  };

  // Mock signup function
  const signup = (userData) => {
    console.log("Signing up with", userData);
    setUser({ email: userData.email });
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  return useContext(AuthContext);
}

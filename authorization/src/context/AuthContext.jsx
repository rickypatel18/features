import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage when the app starts
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (role) => {
    const userData = { role };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

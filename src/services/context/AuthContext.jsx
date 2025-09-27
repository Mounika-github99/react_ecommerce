import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem("token"));

  function handleLogin(user, token) {
    setUser(user);
    setToken(token);
    setLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function logout() {
    setUser(null);
    setToken(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ user, loggedIn, token, handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

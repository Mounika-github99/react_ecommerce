// Frontend-only auth service
export const login = async (email, password) => {
  // here you'd call the backend; simulate success:
  return { token: "demo-token" };
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";
import ProductList from "./components/products/ProductList";
import UserList from "./components/users/UserList";
import Dashboard from "./components/admin/Dashboard";
import AdminLayout from "./components/admin/AdminLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { isAuthenticated } from "./services/authService";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/dashboard" element={
        <PrivateRoute>
          <AdminLayout><Dashboard /></AdminLayout>
        </PrivateRoute>
      } />

      <Route path="/products" element={
        <PrivateRoute>
          <AdminLayout><ProductList /></AdminLayout>
        </PrivateRoute>
      } />

      <Route path="/users" element={
        <PrivateRoute>
          <AdminLayout><UserList /></AdminLayout>
        </PrivateRoute>
      } />

      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple frontend-only auth simulation
    if (email && password) {
      localStorage.setItem("token", "demo-token");
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "92vh" }}>
      <Card style={{ width: 380 }} className="p-3 shadow">
        <h3 className="text-center mb-3">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Login</Button>
        </Form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;

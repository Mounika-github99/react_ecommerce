import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For frontend-only, we just navigate back to login
    alert("Registration simulated. Please login.");
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "92vh" }}>
      <Card style={{ width: 420 }} className="p-3 shadow">
        <h3 className="text-center mb-3">Register</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" value={form.name} onChange={onChange} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={onChange} required />
          </Form.Group>
          <Button type="submit" variant="success" className="w-100">Register</Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignupPage;

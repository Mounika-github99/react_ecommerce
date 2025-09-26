import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Container className="p-4 text-center">
    <h2>404 — Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
    <Button as={Link} to="/">Go Home</Button>
  </Container>
);

export default NotFoundPage;

import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <footer className="bg-dark text-light py-2">
    <Container className="text-center small">
      © {new Date().getFullYear()} MyApp. All rights reserved.
    </Container>
  </footer>
);

export default Footer;

import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ minWidth: 200, maxWidth: 220 }} className="bg-light border-end vh-100 p-3">
      <h6 className="mb-3">Menu</h6>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/products">Products</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

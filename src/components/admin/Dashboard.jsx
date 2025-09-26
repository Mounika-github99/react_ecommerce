import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container fluid className="p-4">
      <h3 className="mb-4">Dashboard</h3>
      <Row className="g-3">
        <Col md={4}>
          <Card className="p-3">
            <h6>Products</h6>
            <p className="mb-0">Manage your products</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h6>Users</h6>
            <p className="mb-0">Create and manage users</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <h6>Stats</h6>
            <p className="mb-0">Overview & stats</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

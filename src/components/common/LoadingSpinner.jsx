import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 120 }}>
    <Spinner animation="border" role="status" />
  </div>
);

export default LoadingSpinner;

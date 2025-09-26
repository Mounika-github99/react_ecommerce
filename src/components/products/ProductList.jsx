import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]); // start empty
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("create"); // create | edit
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: "", // optional URL
  });

  const openModal = (type, product = { id: null, name: "", price: "", description: "", image: "" }) => {
    setModalType(type);
    setCurrentProduct(product);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const submitProduct = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      const newProduct = { ...currentProduct, id: Date.now() };
      setProducts(prev => [...prev, newProduct]);
    } else {
      setProducts(prev => prev.map(p => (p.id === currentProduct.id ? currentProduct : p)));
    }
    closeModal();
  };

  const removeProduct = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <Container fluid className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Products</h4>
        <Button onClick={() => openModal("create")}>Add Product</Button>
      </div>

      {products.length === 0 ? (
        <p className="text-muted">No products — click "Add Product" to start.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map(product => (
            <Col key={product.id} className="d-flex justify-content-center">
              <Card style={{ width: "16rem" }} className="text-center shadow-sm">
                {product.image ? (
                  <Card.Img variant="top" src={product.image} style={{ height: 140, objectFit: "cover" }} />
                ) : (
                  <div style={{ height: 140, background: "#f5f5f5" }} />
                )}

                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem" }}>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">₹ {product.price}</Card.Subtitle>
                  <Card.Text style={{ minHeight: 42 }}>{product.description}</Card.Text>
                  <div className="d-flex justify-content-center gap-2">
                    <Button size="sm" variant="warning" onClick={() => openModal("edit", product)}>Edit</Button>
                    <Button size="sm" variant="danger" onClick={() => removeProduct(product.id)}>Delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === "create" ? "Add Product" : "Edit Product"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitProduct}>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Product Name</Form.Label>
              <Form.Control required value={currentProduct.name} onChange={(e)=>setCurrentProduct({...currentProduct, name: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control required type="number" value={currentProduct.price} onChange={(e)=>setCurrentProduct({...currentProduct, price: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} value={currentProduct.description} onChange={(e)=>setCurrentProduct({...currentProduct, description: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Image URL (optional)</Form.Label>
              <Form.Control type="text" value={currentProduct.image} onChange={(e)=>setCurrentProduct({...currentProduct, image: e.target.value})} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="primary">{modalType === "create" ? "Add" : "Update"}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ProductList;

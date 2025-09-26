import React, { useState } from "react";
import { Container, Button, Table, Modal, Form } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]); // start empty
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [currentUser, setCurrentUser] = useState({ id: null, name: "", email: "" });

  const openModal = (type, user = { id: null, name: "", email: "" }) => {
    setModalType(type);
    setCurrentUser(user);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  const submitUser = (e) => {
    e.preventDefault();
    if (modalType === "create") {
      const newUser = { ...currentUser, id: Date.now() };
      setUsers(prev => [...prev, newUser]);
    } else {
      setUsers(prev => prev.map(u => u.id === currentUser.id ? currentUser : u));
    }
    closeModal();
  };

  const removeUser = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  return (
    <Container fluid className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Users</h4>
        <Button onClick={() => openModal("create")}>Add User</Button>
      </div>

      {users.length === 0 ? (
        <p className="text-muted">No users — click "Add User" to create one.</p>
      ) : (
        <Table striped hover responsive>
          <thead>
            <tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <Button size="sm" variant="warning" className="me-2" onClick={()=>openModal("edit", u)}>Edit</Button>
                  <Button size="sm" variant="danger" onClick={()=>removeUser(u.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalType === "create" ? "Add User" : "Edit User"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitUser}>
          <Modal.Body>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control required value={currentUser.name} onChange={(e)=>setCurrentUser({...currentUser, name: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" value={currentUser.email} onChange={(e)=>setCurrentUser({...currentUser, email: e.target.value})} />
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

export default UserList;

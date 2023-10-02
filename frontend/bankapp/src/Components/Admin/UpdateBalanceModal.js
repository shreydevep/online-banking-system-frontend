import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateBalance } from '../../utils/adminRequests.js'

const UpdateBalanceModal = ({ show, onHide, onUpdateBalance }) => {
  const [amount, setAmount] = useState('');
  const [accno, setAccno] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAccnoChange = (e) => {
    setAccno(e.target.value);
  };

  const handleSubmit = () => {

    const updateObject={accno, amount};
    updateBalance(updateObject);

    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Balance</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAccountNo">
            <Form.Label>Account Number:</Form.Label>
            <Form.Control
              type="text"
              name="accno"
              placeholder="Enter account number..."
              value={accno}
              onChange={handleAccnoChange}
            />
          </Form.Group>
          <Form.Group controlId="formNewBalance">
            <Form.Label>New Balance:</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              placeholder="Enter new balance..."
              value={amount}
              onChange={handleAmountChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateBalanceModal;

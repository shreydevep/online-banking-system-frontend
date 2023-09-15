import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

// Define the styled component for the modal content
const StyledModalContent = styled.div`
  padding: 20px;
`;

const WithdrawalComponent = ({ show, onHide }) => {
  const [amount, setAmount] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  const handleWithdraw = () => {
    // Handle the withdrawal logic here
    // You can use the 'amount' and 'bankAccount' state values
    // to send the withdrawal request to your backend.
    // Don't forget to close the modal when the withdrawal is complete.
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Withdraw Funds</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledModalContent>
          <Form>
            <Form.Group controlId="amount">
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the amount to withdraw"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="bankAccount">
              <Form.Label>Bank Account:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your bank account number"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
              />
            </Form.Group>
          </Form>
        </StyledModalContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WithdrawalComponent;

import React, { useState } from 'react';
import { Modal, Button, Form, Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';

// Define the styled component for the modal content
const StyledModalContent = styled.div`
  padding: 20px;
`;

// Define a custom CSS class for centering the buttons
const centerButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px', // Add some spacing above the buttons
};

const WithdrawalComponent = ({ show, onHide }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalBankAccount, setWithdrawalBankAccount] = useState('');
  const [selfTransferAmount, setSelfTransferAmount] = useState('');
  const [selfTransferAccount, setSelfTransferAccount] = useState('');
  const [activeTab, setActiveTab] = useState('withdrawal'); // Manage active tab

  // Mock data for the target account dropdown
  const targetAccounts = [
    'Account 1',
    'Account 2',
    'Account 3',
    // Add more account options as needed
  ];

  const handleWithdraw = () => {
    // Handle the withdrawal logic here
    // You can use the 'withdrawalAmount' and 'withdrawalBankAccount' state values
    // to send the withdrawal request to your backend.
    // Don't forget to close the modal when the withdrawal is complete.
    onHide();
  };

  const handleSelfTransfer = () => {
    // Handle self-transfer logic here
    // You can use the 'selfTransferAmount' and 'selfTransferAccount' state values
    // for the transfer amount and target account.
    // Don't forget to close the modal when the transfer is complete.
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Funds Transfer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledModalContent>
          <Tabs
            activeKey={activeTab}
            onSelect={(key) => setActiveTab(key)} // Update active tab state
          >
            <Tab eventKey="withdrawal" title="Withdrawal">
              <Form>
                <Form.Group controlId="withdrawalAmount">
                  <Form.Label>Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the amount to withdraw"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="withdrawalBankAccount">
                  <Form.Label>Bank Account:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your bank account number"
                    value={withdrawalBankAccount}
                    onChange={(e) => setWithdrawalBankAccount(e.target.value)}
                  />
                </Form.Group>
              </Form>
              <div style={centerButtonStyle}>
                <Button variant="primary" onClick={handleWithdraw}>
                  Withdraw
                </Button>
              </div>
            </Tab>
            <Tab eventKey="selfTransfer" title="Self Transfer">
              <Form>
                <Form.Group controlId="selfTransferAmount">
                  <Form.Label>Amount:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the amount to transfer"
                    value={selfTransferAmount}
                    onChange={(e) => setSelfTransferAmount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="selfTransferAccount">
                  <Form.Label>Target Account Number:</Form.Label>
                  <Form.Control
                    as="select"
                    value={selfTransferAccount}
                    onChange={(e) => setSelfTransferAccount(e.target.value)}
                  >
                    <option value="">Select an account</option>
                    {targetAccounts.map((account, index) => (
                      <option key={index} value={account}>
                        {account}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
              <div style={centerButtonStyle}>
                <Button variant="primary" onClick={handleSelfTransfer}>
                  Self Transfer
                </Button>
              </div>
            </Tab>
          </Tabs>
        </StyledModalContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WithdrawalComponent;

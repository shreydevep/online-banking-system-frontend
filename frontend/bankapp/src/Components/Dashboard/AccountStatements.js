import React, { useState } from "react";
import { Card, Form, Table, Button } from "react-bootstrap";
import styled from "styled-components";
import {
  getTransactions,
  postAccountStatements,
} from "../../utils/GetRequests";

const TransactionHistory = styled(Card)`
  .bg-primary.text-white {
    border-bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const TransactionTable = styled(Table)`
  td.success {
    color: green;
  }

  td.fail {
    color: red;
  }
`;

const ScrollableTableContainer = styled.div`
  max-height: 48.5vh;
  overflow-y: auto;
  margin-top: 20px;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin: 10px;
`;


const AccountStatements = ({ accounts }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postAccountStatements(selectedAccount, startDate, endDate, setTransactions);
  };

  return (
    <TransactionHistory>
      <Card.Header className="bg-primary text-white">
        Transaction History
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="accountSelect">
            <Form.Label>Select Account:</Form.Label>
            <Form.Control
              as="select"
              value={selectedAccount}
              onChange={handleChange}
            >
              <option value="">Select an account</option>
              {accounts.map((account, index) => (
                <option key={index} value={account.accountNo}>
                  {account.accountNo}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date:</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label>End Date:</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </Form.Group>
          <SubmitButton variant="primary" type="submit">
            Submit
          </SubmitButton>
        </Form>
        <ScrollableTableContainer>
          <TransactionTable striped bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Transaction ID</th>
                <th>Account To</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.timestamp}</td>
                  <td>{transaction.transType}</td>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.accTo}</td>
                  <td
                    className={
                      transaction.status === "SUCCESS" ? "success" : "fail"
                    }
                  >
                    {transaction.status}
                  </td>
                  <td>${transaction.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </TransactionTable>
        </ScrollableTableContainer>
      </Card.Body>
    </TransactionHistory>
  );
};

export default AccountStatements;

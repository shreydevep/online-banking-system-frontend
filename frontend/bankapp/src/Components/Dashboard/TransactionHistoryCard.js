import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import styled from "styled-components";
import { getTransactions } from "../../utils/GetRequests";

const StyledContent = styled.div`
  padding: 20px;
`;

const TransactionHistory = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h5 {
    font-weight: bold;
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
  max-height: 400px;
  overflow-y: auto;
  margin-top: 20px;
`;

const TransactionHistoryCard = ({accounts }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const handleChange = (event) => {
    setSelectedAccount(event.target.value);
    getTransactions(event.target.value, setTransactions);
  };
  <Form.Group controlId="accountSelect">
    <Form.Label>Select Account:</Form.Label>
    <Form.Control as="select" value={selectedAccount} onChange={handleChange}>
      <option value="">Select an account</option>
      {accounts.map((account, index) => (
        <option key={index} value={account.accountNo}>
          {account.accountNo}
        </option>
      ))}
    </Form.Control>
  </Form.Group>;

  return (
    <StyledContent>
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
      <TransactionHistory>
        <h5>Transaction History</h5>
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
      </TransactionHistory>
    </StyledContent>
  );
};

export default TransactionHistoryCard;

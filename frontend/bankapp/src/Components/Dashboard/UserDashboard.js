import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import AccountDetails from "./AccountDetails";
import {
  getAccountDetails,
  getCustomerDetails,
  getTransactions,
} from "../../utils/GetRequests";
import AccountDetailsModal from "./AccountDetailsModal";
import { mockAccounts, mockRecentTransactions } from "../../utils/data";

import { mockAccountData } from "../../utils/data";

const DashboardContainer = styled(Container)`
  background-color: #f5f5f5;
  padding: 20px;
  height: 80vh;
`;

const UserCard = styled(Card)`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h5 {
    font-weight: bold;
  }

  p {
    margin-top: 10px;
  }
`;

const QuickLinksCard = styled(Card)`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;

  h6 {
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

const RecentTransactionsCard = styled(Card)`
  .bg-primary.text-white {
    border-bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const ScrollableTableContainer = styled.div`
  max-height: 150px; /* Adjust the height as needed */
  overflow-y: auto;
`;

const accountDetails = {
  accountNumber: 1234567890,
  accountType: "Savings",
  balance: 1000,
};

const UserDashboard = ({
  customerDetails,
  setCustomerDetails,
  transactions,
  setTransactions,
}) => {

  return (
    <>
      <DashboardContainer fluid>
        <Row>
          <Col md={3}>
            {/* <UserCard>
              <Card.Body>
                <h5 className="mb-3">Welcome, User!</h5>
                <p>
                  <strong>Account Balance:</strong> {accountDetails.balance}
                </p>
                <Button
                  variant="primary"
                  onClick={handleToggle}
                >
                  View Account Details
                </Button>
              </Card.Body>
            </UserCard> */}
            {/* <QuickLinksCard>
            <Card.Body>
              <h6>Quick Links</h6>
              <ul>
                <li><a href="#">Transfer Money</a></li>
                <li><a href="#">Pay Bills</a></li>
                <li><a href="#">Transaction History</a></li>
              </ul>
            </Card.Body>
          </QuickLinksCard> */}
          </Col>
          <Col md={12}>
            <RecentTransactionsCard>
              <Card.Header className="bg-primary text-white">
                Recent Transactions
              </Card.Header>
              <Card.Body>
                <ScrollableTableContainer>
                  <Table striped bordered hover responsive>
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
                          <td>{transaction.status}</td>
                          <td>${transaction.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </ScrollableTableContainer>
              </Card.Body>
            </RecentTransactionsCard>
            <br></br>
            <AccountDetails accounts={customerDetails.account} />
          </Col>
        </Row>
      </DashboardContainer>
    </>
  );
};

export default UserDashboard;

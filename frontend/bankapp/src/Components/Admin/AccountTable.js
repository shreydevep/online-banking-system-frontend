import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

// Styled component for the outer container
const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px; /* Add margin to the container */
  max-height: 400px; /* Add max-height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
`;

// Styled component for AccountTable
const StyledAccountTable = styled(Table)`
  background-color: #fff;
  border: 1px solid #ddd;
  border-collapse: collapse;

  th {
    background-color: #007bff;
    color: #fff;
  }

  td,
  th {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
`;

const AccountTable = ({ accountDetails }) => {
  return (
    <Container>
      <StyledAccountTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Account Number</th>
            <th>Branch</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountDetails.map((account, index) => (
            <tr key={index}>
              <td>{account.accountType}</td>
              <td>{account.accountNumber}</td>
              <td>{account.branch}</td>
              <td>${account.balance}</td>
            </tr>
          ))}
        </tbody>
      </StyledAccountTable>
    </Container>
  );
};

export default AccountTable;

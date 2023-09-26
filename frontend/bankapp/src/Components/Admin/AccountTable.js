import axios from "axios";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import notifyError from "../../utils/toastify-services/notifyError";
import notifySuccess from "../../utils/toastify-services/notifySuccess";

// Styled component for the outer container
const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px; /* Add margin to the container */
  max-height: 400px; /* Add max-height for scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
`;

// Styled component for TransactionTable
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

  td.fail {
    color: green;
  }
  td.success {
    color: red;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AccountTable = () => {
  const [customerId, setCustomerId] = useState(""); // State for customer ID input
  const [account, setAccount] = useState([]); // State for transactions [

  const handleSearch = () => {
    // Call the searchTransactions function with the customerId
    setAccount([]);
    if (customerId !== "")
      axios
        .get(`http://localhost:8080/customer/${customerId}`)
        .then((res) => {
          setAccount(res.data.account);
          notifySuccess("Account details fetched successfully");
        })
        .catch((err) => {
          console.log(err.response.data);
          notifyError(err.response.data.message);
        });
    else notifyError("Please enter a valid customer ID")
  };

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <StyledAccountTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Account Type</th>
            <th>Account No</th>
            <th>Branch</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {account.map((account, index) => (
            <tr key={index}>
              <td>{account.accountType}</td>
              <td>{account.accountNo}</td>
              <td>{account.branch}</td>
              <td>{account.balance}</td>
              <td className={account.disabled ? "success" : "fail"}>
                {account.disabled ? "Disabled" : "Active"}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledAccountTable>
    </Container>
  );
};

export default AccountTable;

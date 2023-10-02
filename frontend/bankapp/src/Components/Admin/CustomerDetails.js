import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import notifySuccess from "../../utils/toastify-services/notifySuccess";
import notifyError from "../../utils/toastify-services/notifyError";
import { getCustomerDetails } from "../../utils/adminRequests";


const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px;
  max-height: 400px;
  overflow-y: auto;
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

const Header = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 8px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CustomerDetailsDisplayContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
`;

const FieldColumn = styled.div`
  flex-basis: 20%;
  padding: 5px;
  box-sizing: border-box;
`;

const BoldField = styled.span`
  font-weight: bold;
`;

const CustomerDetailsDisplay = ({ customerData }) => {
  if (!customerData) {
    return null;
  }

  return (
    <CustomerDetailsDisplayContainer>
      <FieldColumn>
        <p><BoldField>Customer ID:</BoldField></p>
        <p><BoldField>Name:</BoldField></p>
        <p><BoldField>Date of Birth:</BoldField></p>
        <p><BoldField>Aadhar Number:</BoldField></p>
        <p><BoldField>Mobile:</BoldField></p>
        <p><BoldField>Email:</BoldField></p>
        <p><BoldField>Address:</BoldField></p>
        <p><BoldField>Father Name:</BoldField></p>
        <p><BoldField>Mother Name:</BoldField></p>
      </FieldColumn>
      <FieldColumn>
        <p>{customerData.customerId}</p>
        <p>{customerData.name}</p>
        <p>{customerData.dob}</p>
        <p>{customerData.aadhar}</p>
        <p>{customerData.mobile}</p>
        <p>{customerData.email}</p>
        <p>{customerData.address}</p>
        <p>{customerData.fathername}</p>
        <p>{customerData.mothername}</p>
      </FieldColumn>
    </CustomerDetailsDisplayContainer>
  );
};

const CustomerDetails = () => {
  const [customerId, setCustomerId] = useState("");
  const [customerData, setCustomerData] = useState(null);

  const handleSearch = () => {
    getCustomerDetails(customerId, setCustomerData);
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
      <Header>Customer Information</Header>
      <CustomerDetailsDisplay customerData={customerData} />
    </Container>
  );
};

export default CustomerDetails;

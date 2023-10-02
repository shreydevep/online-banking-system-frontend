import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./SideBar";
import UserDashboard from "./UserDashboard";
import Appbar from "./Appbar";

import {
  getAllUserTransactions,
  getCustomerDetails,
} from "../../utils/GetRequests";
import styled from "styled-components";

const SidebarContainer = styled.div`
  @media (min-width: 768px) {
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const Layout = ({ globalRefresh, setGlobalRefresh }) => {
  const [customerDetails, setCustomerDetails] = useState({ account: [] });
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    getCustomerDetails(
      sessionStorage.getItem("customerId"),
      setCustomerDetails
    );
    getAllUserTransactions(
      sessionStorage.getItem("customerId"),
      setTransactions
    );
    console.log(transactions);
    console.log("Refreshing");
  }, [globalRefresh]);
  return (
    <>
      <Appbar />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SidebarContainer>
              <Sidebar
                customerDetails={customerDetails}
                globalRefresh={globalRefresh}
                setGlobalRefresh={setGlobalRefresh}
              />
            </SidebarContainer>
          </Col>
          <Col md={9}>
            <UserDashboard
              customerDetails={customerDetails}
              setCustomerDetails={setCustomerDetails}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

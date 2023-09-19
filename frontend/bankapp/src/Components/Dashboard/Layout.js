import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./SideBar"; // Import your Sidebar component
import UserDashboard from "./UserDashboard";
import NavBar from "../NavBar";
import Appbar from "./Appbar";

import { getAccountDetails, getCustomerDetails, getTransactions } from "../../utils/GetRequests";

const Layout = () => {
  const [customerDetails, setCustomerDetails] = useState({ account: [] });
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    getCustomerDetails(1, setCustomerDetails);
    getTransactions("20040379527", setTransactions);
    console.log(transactions);
  }, []);
  return (
    <>
      <Appbar />

      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar customerDetails={customerDetails}/>
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

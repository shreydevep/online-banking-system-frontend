import React,{useEffect,useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./SideBar"; // Import your Sidebar component
import UserDashboard from "./UserDashboard";
import NavBar from "../NavBar";
import Appbar from "./Appbar";
import AccountDetails from "./AccountDetails";
import AccountDetailsModal from "./AccountDetailsModal";
import {getCustomerDetails} from "../../utils/GetRequests"

const Layout = () => {
const [customerDetails, setCustomerDetails] = useState({account: []});
  useEffect(() => {
    const customerId=sessionStorage.getItem("customerId");
    if(customerId!=null){
        getCustomerDetails(customerId, setCustomerDetails);
        console.log(customerDetails);
    }

  }, []);
  
  return (
    <>
      <Appbar />
    
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <UserDashboard customerDetails={customerDetails}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;

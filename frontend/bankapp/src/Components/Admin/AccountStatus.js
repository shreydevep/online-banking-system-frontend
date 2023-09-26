import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import notifySuccess from "../../utils/toastify-services/notifySuccess";
import notifyError from "../../utils/toastify-services/notifyError";

const AccountStatus = ({ show, onHide }) => {
  const [accountNumber, setAccountNumber] = useState("");

  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = () => {
    const baseURL = `http://localhost:8080/admin/toggleAccountStatus/${accountNumber}`;
    axios
      .post(baseURL)
      .then((response) => {
        console.log(response);
        notifySuccess(response.data);
      })
      .catch((error) => {
        
        console.log(error);
      });
    //         here, e.g., send the account number to your server or perform any other action.
    console.log("Account Number:", accountNumber);

    // Close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Account Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formInput">
            <Form.Label>Account Number:</Form.Label>
            <Form.Control
              type="text"
              name="AccountNumber" // Set the name attribute
              placeholder="Enter account number..."
              value={accountNumber}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Toggle
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AccountStatus;

import React, { useState } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';




// Define the styled component for the modal content
const StyledModalContent = styled.div`
  padding: 20px;
`;

const UserProfile = ({ show, onHide, user }) => {
  return (

    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledModalContent>
          <Tabs defaultActiveKey="profile" id="user-profile-tabs">
            <Tab eventKey="profile" title="Profile">
              <div>
                <strong>Name:</strong>
              </div>
              <div>
                <strong>Email:</strong>
              </div>
              <div>
                <strong>Phone:</strong>
              </div>
              <div>
                <strong>Address:</strong>
              </div>
            </Tab>
            {/* Add additional tabs for more user information if needed */}
          </Tabs>
        </StyledModalContent>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  );
};

export default UserProfile;

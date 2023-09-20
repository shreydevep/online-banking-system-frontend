import React, { useState } from "react";
import styled from "styled-components";
import { Card, Nav, NavItem, NavLink } from "react-bootstrap";
import WithdrawalComponent from "./WithdrawalComponent";

import FundsTransferComponent from "./FundsTransferComponent";
import { getCustomerDetails } from "../../utils/GetRequests";
import UserProfile from "./UserProfile";
import PasswordChange from "./PasswordChange";
import TransactionHistory from "./TransactionHistory";

const StyledSidebar = styled(Card)`
  height: 80vh;
  background: #f7f7f7;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 20px;
  display: flex;
  flex-grow: 1;
  overflow-y: auto;

  .font-weight-bold {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

const ProfileCardContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ProfileCardTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

const ProfileCardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ProfileInfo = styled.div`
  margin-bottom: 10px;
  color: #555;
`;

const SidebarNavItem = styled(NavItem)`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Sidebar = ({customerDetails}) => {
  const [showWithdrawalModal, setShowWithdrawalModal] = React.useState(false);

  const [showFundsTransferComponent, setShowFundsTransferComponent] =
    React.useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = React.useState(false);
  const [showPasswordChangeModal, setShowPasswordChangeModal] =
    React.useState(false);
  const [showTransactionHistoryModal, setShowTransactionHistoryModal] =
    useState(false);

  const customerId=sessionStorage.getItem("customerId");
  getCustomerDetails("customerId");


  return (
    <StyledSidebar>
      <WithdrawalComponent
        show={showWithdrawalModal}
        onHide={() => setShowWithdrawalModal(!showWithdrawalModal)}
      />

      <FundsTransferComponent
        show={showFundsTransferComponent}
        onHide={setShowFundsTransferComponent}
        targetAccounts={customerDetails.account}
      />
      <TransactionHistory
        show={showTransactionHistoryModal}
        onHide={()=>setShowTransactionHistoryModal(!showTransactionHistoryModal)}
        accounts={customerDetails.account}
      />

      <UserProfile
        show={showUserProfileModal}
        onHide={() => setShowUserProfileModal(!showUserProfileModal)}
        customerDetails={customerDetails}
      />
      <PasswordChange
        show={showPasswordChangeModal}
        onHide={() => setShowPasswordChangeModal(!showPasswordChangeModal)}
      />
      <SidebarNavItem>
        <Card.Title className="font-weight-bold">Dashboard</Card.Title>
      </SidebarNavItem>
      <ProfileCardLink onClick={() => setShowUserProfileModal(true)}>
              <ProfileCardContainer>
                <ProfileCardTitle>Profile</ProfileCardTitle>
                <ProfileInfo>Name: {customerDetails.name} </ProfileInfo>
                <ProfileInfo>Email: {customerDetails.email}</ProfileInfo>
                <ProfileInfo>Mobile: {customerDetails.mobile}</ProfileInfo>
                <ProfileInfo>Aadhar: {customerDetails.aadhar}</ProfileInfo>
              </ProfileCardContainer>
      </ProfileCardLink>
      <SidebarNavItem>
        <NavLink onClick={() => setShowWithdrawalModal(true)}>
          Funds Transfer
        </NavLink>
      </SidebarNavItem>
      <SidebarNavItem>
        <NavLink onClick={() => setShowFundsTransferComponent(true)}>
          Transfer Money
        </NavLink>
      </SidebarNavItem>
      <SidebarNavItem>
        <NavLink onClick={() => setShowTransactionHistoryModal(true)}>
          Transaction History
        </NavLink>
      </SidebarNavItem>
      <SidebarNavItem>
        <NavLink href="/account">New Account</NavLink>
      </SidebarNavItem>
      <SidebarNavItem>
        <NavLink href="#">Account Details</NavLink>
      </SidebarNavItem>
      <SidebarNavItem>
        <NavLink onClick={() => setShowPasswordChangeModal(true)}>
          Change Password
        </NavLink>
      </SidebarNavItem>

    </StyledSidebar>
  );
};

export default Sidebar;

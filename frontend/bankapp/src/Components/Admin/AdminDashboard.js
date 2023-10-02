import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import AdminCreateAccount from './AdminCreateAccount';
import TransactionTable from './TransactionTable';
import AccountTable from "./AccountTable";
import CustomerDetails from "./CustomerDetails";
import styled from 'styled-components';

import { useNavigate } from 'react-router';

import UpdateBalanceModal from './UpdateBalanceModal';



const StyledAppBar = styled(AppBar)`
  background-color: #0F053D;

`;





const AdminDashboard = () => {
  const [showUpdateBalanceModal, setUpdateBalanceModal] = useState(false);
  const [showAdminCreateAccountModal, setShowAdminCreateAccountModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logged out');
    sessionStorage.clear();

    navigate("/");
  };


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
      <div>
        <AdminCreateAccount
            show={showAdminCreateAccountModal}
            onHide={() => setShowAdminCreateAccountModal(false)}
        />
        <UpdateBalanceModal
            show={showUpdateBalanceModal}
            onHide={() => setUpdateBalanceModal(false)}
        />
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <Button color="inherit"
                     aria-controls="menu-dropdown"
                     aria-haspopup="true"
                     onClick={handleMenuOpen}
                     >
                        Menu
            </Button>
            <Menu
                    id="menu-dropdown"
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={Boolean(menuAnchorEl)}
                    onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => setShowAdminCreateAccountModal(true)}>Create Account</MenuItem>
                        <MenuItem onClick={() => setUpdateBalanceModal(true)}>Update Balance</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>

            </Menu>

          </Toolbar>
        </StyledAppBar>



        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Customer" />
          <Tab label="Accounts" />
          <Tab label="Transactions" />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
            <CustomerDetails />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>

          <AccountTable />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>

          <TransactionTable />
        </TabPanel>
      </div>
  );
};

export default AdminDashboard;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`tabpanel-${index}`}
          {...other}
      >
        {value === index && (
            <Box p={3}>
              {children}
            </Box>
        )}
      </div>
  );
}

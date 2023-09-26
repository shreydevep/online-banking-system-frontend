import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import AccountStatus from './AccountStatus';
import AdminCreateAccount from './AdminCreateAccount';
import TransactionTable from './TransactionTable';
import AccountTable from "./AccountTable";
import CustomerDetails from "./CustomerDetails";
import styled, { css } from 'styled-components';
import { mockTransactionData } from '../../utils/data';

const StyledAppBar = styled(AppBar)`
  background-color: #333;
   /* Add margin to the bottom */
`;

const StyledButton = styled(Button)`
  && {
    color: white;
  }
`;

const CardContainer = styled.div`
  cursor: pointer;
  bottom-margin: 5px; /* Add margin to the container */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CardTitle = styled(Typography)`
  && {
    font-size: 20px;
  }
`;

const CardDescription = styled(Typography)`
  && {
    color: #555;
  }
`;

const AdminDashboard = () => {
  const [showAccountStatusModal, setShowAccountStatusModal] = useState(false);
  const [showAdminCreateAccountModal, setShowAdminCreateAccountModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab

  const handleLogout = () => {
    console.log('Logged out');
  };

  const handleCardClick = (cardNumber) => {
    console.log(`Clicked on Card ${cardNumber}`);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
      <div>
        <AccountStatus show={showAccountStatusModal} onHide={() => setShowAccountStatusModal(false)} />
        <AdminCreateAccount
            show={showAdminCreateAccountModal}
            onHide={() => setShowAdminCreateAccountModal(false)}
        />
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
            <StyledButton color="inherit" onClick={handleLogout}>
              Logout
            </StyledButton>
          </Toolbar>
        </StyledAppBar>
        <Grid container spacing={3} sx={{ marginTop: '5px' }}>
          <Grid item xs={12} sm={6} md={3}>
            <CardContainer onClick={() => setShowAccountStatusModal(true)}>
              <Card sx={{ backgroundColor: 'lightblue', height: '100px' }}>
                <CardContent>
                  <CardTitle variant="h5" component="div">
                    Account Status
                  </CardTitle>
                  <CardDescription variant="body2">
                    Toggle the status of an account.
                  </CardDescription>
                </CardContent>
              </Card>
            </CardContainer>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardContainer onClick={() => setShowAdminCreateAccountModal(true)}>
              <Card sx={{ backgroundColor: 'lightblue', height: '100px' }}>
                <CardContent>
                  <CardTitle variant="h5" component="div">
                    Create Account
                  </CardTitle>
                  <CardDescription variant="body2">
                    Create a new account for an existing customer.
                  </CardDescription>
                </CardContent>
              </Card>
            </CardContainer>
          </Grid>
        </Grid>

        {/* Tabs Panel */}
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Customer" />
          <Tab label="Accounts" />
          <Tab label="Transactions" />
        </Tabs>
        <TabPanel value={activeTab} index={0}>
            <CustomerDetails />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          {/* Content for Tab 1 */}
          <AccountTable />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          {/* Content for Tab 2 */}
          <TransactionTable />
        </TabPanel>
      </div>
  );
};

export default AdminDashboard;

// TabPanel component to display content for each tab
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

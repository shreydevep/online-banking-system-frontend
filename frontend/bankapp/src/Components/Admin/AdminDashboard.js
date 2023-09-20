import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import AccountStatus from './AccountStatus';
import AdminCreateAccount from './AdminCreateAccount';
import styled, { css } from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #333;
  margin-bottom: 20px; /* Add margin to the bottom */
`;

const StyledButton = styled(Button)`
  && {
    color: white;
  }
`;

const CardContainer = styled.div`
  cursor: pointer;
  margin: 10px; /* Add margin to the container */
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

  const handleLogout = () => {
    console.log('Logged out');
  };

  const handleCardClick = (cardNumber) => {
    console.log(`Clicked on Card ${cardNumber}`);
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
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <CardContainer onClick={() => setShowAccountStatusModal(true)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
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
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
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
        <Grid item xs={12} sm={6} md={3}>
          <CardContainer onClick={() => handleCardClick(3)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <CardTitle variant="h5" component="div">
                  Card 3
                </CardTitle>
                <CardDescription variant="body2">
                  This is the content of Card 3.
                </CardDescription>
              </CardContent>
            </Card>
          </CardContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardContainer onClick={() => handleCardClick(4)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <CardTitle variant="h5" component="div">
                  Card 4
                </CardTitle>
                <CardDescription variant="body2">
                  This is the content of Card 4.
                </CardDescription>
              </CardContent>
            </Card>
          </CardContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;

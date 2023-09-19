import React from 'react';
import { AppBar, Toolbar, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import AccountStatus from "./AccountStatus";
import AdminCreateAccount from "./AdminCreateAccount"
const AdminDashboard = () => {
  const [showAccountStatusModal, setShowAccountStatusModal] = React.useState(false);
  const [showAdminCreateAccountModal, setShowAdminCreateAccountModal] = React.useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  const handleCardClick = (cardNumber) => {
    // Implement the click event for each card here
    console.log(`Clicked on Card ${cardNumber}`);
  };


  return (

    <div>
        <AccountStatus
        show = {showAccountStatusModal}
        onHide={() => setShowAccountStatusModal(false)}
        />
        <AdminCreateAccount
        show = {showAdminCreateAccountModal}
        onHide={() => setShowAdminCreateAccountModal(false)}
        />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <div onClick={() => setShowAccountStatusModal(true)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Account Status
                </Typography>
                <Typography variant="body2">
                  Toggle the status of an account.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div onClick={() => setShowAdminCreateAccountModal(true)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Create Account
                </Typography>
                <Typography variant="body2">
                  Create a new account for a existing customer.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div onClick={() => handleCardClick(3)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 3
                </Typography>
                <Typography variant="body2">
                  This is the content of Card 3.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div onClick={() => handleCardClick(4)}>
            <Card sx={{ backgroundColor: 'lightblue', height: '200px' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Card 4
                </Typography>
                <Typography variant="body2">
                  This is the content of Card 4.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );

};

export default AdminDashboard;

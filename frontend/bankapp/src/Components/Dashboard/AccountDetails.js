import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

// Styled component for AccountDetailsCard
const StyledAccountDetailsCard = styled(Card)`
  .bg-primary.text-white {
    border-bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const ScrollableTableContainer = styled.div`
  max-height: 150px; /* Adjust the height as needed */
  overflow-y: auto;
`;


const AccountDetails = ({ accounts }) => {
  // Assuming 'accounts' is an array of account objects, each containing account details.

  return (
    <StyledAccountDetailsCard>
      <Card.Header className="bg-primary text-white">
        Account Details
      </Card.Header>
      <Card.Body>
      <ScrollableTableContainer>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Account Holder</th>
              <th>Account Number</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.accountHolder}</td>
                <td>{account.accountNumber}</td>
                <td>${account.balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </ScrollableTableContainer>
      </Card.Body>
    </StyledAccountDetailsCard>
  );
};

export default AccountDetails;

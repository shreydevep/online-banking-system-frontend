import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const CheckBalanceCardContainer = styled(Card)`
  background-color: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
`;

const CheckBalanceCardTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const CheckBalanceCardInfo = styled.div`
  font-size: 18px;
  color: #555;
`;

const CheckBalanceCard = ({ accounts }) => {
  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  return (
    <CheckBalanceCardContainer>
      <Card.Body>
        <CheckBalanceCardTitle>Balance</CheckBalanceCardTitle>

        <CheckBalanceCardInfo
          style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
        >
          ${totalBalance}
        </CheckBalanceCardInfo>
      </Card.Body>
    </CheckBalanceCardContainer>
  );
};

export default CheckBalanceCard;
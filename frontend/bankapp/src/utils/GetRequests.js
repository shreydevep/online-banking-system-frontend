import axios from "axios";

export const getAccountDetails = async (accountNumber, setAccountDetails) => {
  try {
    console.log(`http://localhost:8080/getAccountDetails/${accountNumber}`);
    const response = await fetch(
      `http://localhost:8080/getAccountDetails/${accountNumber}`
    );
    const data = await response.json();
    console.log(data);
    setAccountDetails(data);
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerDetails = async (customerId, setCustomerDetails) => {
  try {
    const response = await fetch(
      `http://localhost:8080/customer/${customerId}`
    );
    const data = await response.json();
    console.log(data);
    setCustomerDetails(data);
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = (otp, customerId, password) => {
  const baseURL = `http://localhost:8080/changePassword/${otp}`;
  try {
    axios
      .put(baseURL, {
        customerId,
        password,
      })
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};

export const getTransactions = async (accountNumber, setTransactions) => {
  try {
    axios
      .get(`http://localhost:8080/transactions/${accountNumber}`)
      .then((response) => {
        console.log(response.data);
        setTransactions(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};

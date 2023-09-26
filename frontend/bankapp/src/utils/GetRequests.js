import axios from "axios";
import notifySuccess from "./toastify-services/notifySuccess";
import notifyError from "./toastify-services/notifyError";

export const getAccountDetails = async (accountNumber, setAccountDetails) => {
  try {
    const response = await fetch(
      `http://localhost:8080/getAccountDetails/${accountNumber}`
    );
    const data = await response.json();
    console.log(data);
    setAccountDetails(data);
  } catch (error) {
    console.log(error);
    notifyError(error.response.data.message);
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
    notifyError(error.response.data.message);
  }
};

export const updatePassword = (otp, customerId, password) => {
  const baseURL = `http://localhost:8080/changePassword/${otp}`;
  axios
    .put(baseURL, {
      customerId,
      password,
    })
    .then((response) => console.log(response))
    .catch((error) => {
      console.log(error);
      notifyError(error.response.data.message);
    });
};
export const getAllUserTransactions = async (customerId, setTransactions) => {
  try {
    const response = await fetch(
      `http://localhost:8080/allTransactions/${customerId}`
    );
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  } catch (error) {
    console.log(error);
    notifyError(error.response.data.message);
  }
};

export const getTransactions = async (accountNumber, setTransactions) => {
  axios
    .get(`http://localhost:8080/transactions/${accountNumber}`)
    .then((response) => {
      console.log(response.data);
      setTransactions(response.data);
    })
    .catch((error) => {
      console.log(error);
      notifyError(error.response.data.message);
    });
};

export const getAllAccountsBalance = async (customerId, setTotalBalance) => {
  try {
    const response = await fetch(
      `http://localhost:8080/allAccountBalance/${customerId}`
    );

    const data = await response.json();
    console.log(data);
    setTotalBalance(data);
    notifySuccess("Balance refreshed successfully")
  } catch (error) {
    console.log(error);
    notifyError(error.response.data.message);
  }
};

export const transferFunds = async (transferFundsObject) => {
  axios
    .post(`http://localhost:8080/transact`, transferFundsObject)
    .then((response) => {
      console.log(response);
      //alert(response.data, response.status);
      notifySuccess(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      //alert(error.response.data.message);
      notifyError(error.response.data.message);
    });
};

export const loginCustomer = async (loginObject, navigate) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/login`,
      loginObject
    );
    if (response.status == 200) {
      notifySuccess(response.data);
      sessionStorage.setItem("customerId", loginObject.customerId);
      navigate("/userdashboard");
    } else {
      notifyError(response.data);
    }
  } catch (error) {
    console.log(error);
    notifyError(error.response.data.message);
  }
};


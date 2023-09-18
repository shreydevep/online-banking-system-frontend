import axios from "axios";


export const getAccountDetails = async (accountNumber,setAccountDetails) => {
  try {
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

export const updatePassword = (otp, customerId, password) => {
    const baseURL=`http://localhost:8080/changePassword/${otp}`
  try {
    axios
          .put(baseURL, {
            customerId,
            password
          }).then(response => console.log(response))

  } catch (error) {
    console.log(error);
  }
};

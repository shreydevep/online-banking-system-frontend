import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import InputComponent from "./InputComponent";
import NavBar from "./NavBar";

function reverseString(inputDate) {
  // Split the input date by '-' to get day, month, and year
  console.log(inputDate);
  const dateParts = inputDate.split('-');
  console.log(dateParts);
  // Check if the dateParts array has exactly 3 elements
  if (dateParts.length !== 3) {
    return "Invalid date format. Please use 'dd-mm-yyyy'.";
  }

  // Rearrange the date parts to the 'yyyy-mm-dd' format
  const year = dateParts[2];
  const month = dateParts[1];
  const day = dateParts[0];
  console.log(year, month, day);
  // Create the formatted date string
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);

  return formattedDate;
}







const Registration = () => {
  const paperStyle = {
    padding: 20,
    height: "80%",
    width: 350,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const baseURL = "http://localhost:8080/register";
  const navigate = useNavigate();

  const [toggleButton, setToggleButton] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setmobile] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const mobileHandler = (event) => {
    setmobile(event.target.value);
  };

  const aadharHandler = (event) => {
    setAadhar(event.target.value);
  };

  const dobHandler = (event) => {
    setDob((event.target.value));
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    console.log({
      password: password,
      name: name,
      mobile,
      aadhar,
      email,
      dob: dob
    });
    axios
      .post(baseURL, {
        password: password,
        name: name,
        mobile,
        aadhar,
        email,
        dob: dob
      })
      .then((response) => {
        console.log(response);
        //alert(response.data.message);
        setDob("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        //alert(error.response.data.message);
        //alert("error===" + error);
      });
  };

  return (
    <>
      <NavBar />
      <Grid xs={12}>
        <Paper elevation={10} style={paperStyle}>
          <Grid item align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2>Customer Sign Up</h2>
          </Grid>
          {!toggleButton ? (
            <>
              <Grid item xs={12}>
                <InputComponent
                  _id={"Customer Name"}
                  _value={name}
                  _placeholder={"Enter Customer Name"}
                  _changeHandler={nameHandler}
                />
                <InputComponent
                  _id={"Email"}
                  _value={email}
                  _placeholder={"Enter Email"}
                  _changeHandler={emailHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  _id={"Password"}
                  _value={password}
                  _placeholder={"Enter Password"}
                  _changeHandler={passwordHandler}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12}>
                <InputComponent
                  _id={"Aadhar Number"}
                  _value={aadhar}
                  _placeholder={"Enter Aadhar Number"}
                  _changeHandler={aadharHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  _id={"Mobile"}
                  _value={mobile}
                  _placeholder={"Enter Moblie"}
                  _changeHandler={mobileHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <InputComponent
                  _id={""}
                  _value={dob}
                  _placeholder={"Enter DOB"}
                  _changeHandler={dobHandler}
                  _type={"date"}
                />
              </Grid>
            </>
          )}

          <Grid item xs={12} style={{display: "flex",justifyContent: "center", alignItems:"center" }}>
            {toggleButton ? (
              <Button color="warning" onClick={() => setToggleButton(!toggleButton)}>
                Back
              </Button>
            ) : (
              <Button color="success"  onClick={() => setToggleButton(!toggleButton)}>
                Next
              </Button>
            )}
          </Grid>

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={submitActionHandler}
            
          >
            Sign Up
          </Button>

          <Typography>
            Already Customer : <Link href="login">Sign In</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};
export default Registration;

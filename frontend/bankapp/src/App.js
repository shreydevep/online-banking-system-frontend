import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AccountPage from "./Components/AccountPage";
import LoginPage from "./Components/LoginPage";
import Registration from "./Components/Registration";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import NavBar from "./Components/NavBar";
import Layout from "./Components/Dashboard/Layout";
import WithdrawalComponent from "./Components/Dashboard/WithdrawalComponent";
//import UserProfile from "./Components/Dashboard/UserProfile.js"
import ForgotPassword from "./Components/ForgotPassword"
function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/userdashboard" element={<Layout />} />

            <Route exact path="/account" element={<AccountPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

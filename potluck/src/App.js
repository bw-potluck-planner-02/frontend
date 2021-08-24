import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import theme from "./theme";
import PrivateRoute from "./utils/PrivateRoute";
import Potluck from "./components/Potluck";
import LoginPage from "./components/pages/Login/LoginContainer";
import Registration from "./components/Registration";
import RenderLandingPage from "./components/pages/Landing/RenderLandingPage";

import Home from './components/Home'
// import DashboardPage from "./components/Dashboard"

import MyProfilePage from "./components/pages/MyProfile/RenderMyProfilePage";

import DashboardPage from "./components/pages/Dashboard/RenderDashboardPage";


const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
};




const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.secondaryColor};
  header {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  header nav a {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  header nav a:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;



function App() {
  return (
    <Router>

      <div className="App">
        <header >

      <StyledBody className="App">
        {/* <header >

          <h1>Potluck Planner</h1>

          <nav>
            <span className="navspans"><Link to="/">Home</Link></span>
            {/* <span className="navspans"><Link to="/login">Login</Link></span> */}
            <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
            <span className="navspans"><Link to="/my-profile">My Profile</Link></span>
            <span className="navspans"><Link to="/help">Help</Link></span>
            <span className="navspans"><Link to href="/" onClick={logout}>logout</Link></span>
          </nav>
        </header>
        <Switch>
          <PrivateRoute path="/dashboard">
            <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path="/my-profile">
            <MyProfilePage />
          </PrivateRoute>

          <PrivateRoute path="/potluck">
            <Potluck />
          </PrivateRoute>

          <Route path="/login">

            <Login />
          </Route>

          <Route path="/landing" >
              <RenderLandingPage />
          </Route>

          <Route path="/register" >
            <Registration />
          </Route>

          <Route exact path="/">
            <Home />
          </Route> 


            <LoginPage />
          </Route>

          <Route path="/">
            <RenderLandingPage />
          </Route>

        </Switch>
      </StyledBody>
    </Router>
  );
}


export default App;

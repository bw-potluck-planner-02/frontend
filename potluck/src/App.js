import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Potluck from "./components/Potluck";
import LoginPage from "./components/pages/Login/LoginContainer";
import Registration from "./components/Registration";
import RenderLandingPage from "./components/pages/Landing/RenderLandingPage";
import MyProfilePage from "./components/pages/MyProfile/RenderMyProfilePage";
import DashboardPage from "./components/pages/Dashboard/RenderDashboardPage";

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header >
          <h1>Potluck Planner</h1>

          <nav>
            <span className="navspans"><Link to="/">Home</Link></span>
            <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
            <span className="navspans"><Link to="/my-profile">My Profile</Link></span>
            <span className="navspans"><Link to="/help">Help</Link></span>
            <span className="navspans"><Link to href="/" onClick={logout}>logout</Link></span>
          </nav>
        </header> */}
        <Switch>
          <PrivateRoute path="/dashboard">
          <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path="/my-profile">
            <MyProfilePage />
          </PrivateRoute>


          <PrivateRoute path='/potluck'>
            <Potluck />
          </PrivateRoute>

          <Route path="/login">
            <LoginPage />
            </Route>

          <Route path="/">
            <RenderLandingPage />
          </Route> 


        </Switch>
      </div>
    </Router>
  );
}

export default App;

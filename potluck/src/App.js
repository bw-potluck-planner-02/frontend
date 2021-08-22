import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Potluck from "./components/Potluck";
import Login from "./components/Login";
import Registration from "./components/Registration";
// import DashboardPage from "./components/Dashboard"

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}

function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <h1>Potluck Planner</h1>

          <nav>
            <span className="navspans"><Link to="/landing">Home</Link></span>
            <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
            <span className="navspans"><Link to="/my-profile">My Profile</Link></span>
            <span className="navspans"><Link to="/help">Help</Link></span>
            <span className="navspancs"><Link data-testid="logoutButton" href="/" onClick={logout}>logout</Link></span>
          </nav>
        </header>
        {/* <Switch> */}
        {/* <PrivateRoute path="/dashboard">
          <DashboardPage />
          </PrivateRoute> */}

        <PrivateRoute path='/potluck'>
          <Potluck />
        </PrivateRoute>


        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register" component={Registration} />
        {/* <Registration /> */}

        <Route exact path="/" component={Login} />


        {/* <Login /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;

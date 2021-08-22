import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
    
      <div className="App">
        <header >
          <h1>Potluck Planner</h1>
          <button data-testid="logoutButton" href="/" onClick={logout}>logout</button>
        </header>
        <Switch>
        {/* <PrivateRoute path="/dashboard">
          <DashboardPage />
          </PrivateRoute> */}
          
        <PrivateRoute path='/potluck'>
        <Potluck />
        </PrivateRoute>
        
        <Route path="/register" component={Registration} />
        <Route path="/login">
          <Login />
        </Route>
          
          <Route exact path="/" component={Login} />
          <Registration />
          
          {/* <Login /> */}
        </Switch>
      </div>
    
  );
}

export default App;

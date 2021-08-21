import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Potluck from "./components/Potluck";
import PrivateRoute from './utils/PrivateRoute';

import Login from "./components/Login";
import Registration from "./components/Registration";

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Potluck Planner</h1>
          <a data-testid="logoutButton" href="/" onClick={logout}>logout</a>
        </header>

        <Switch>
        <PrivateRoute exact path='/potluck' component={Potluck} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route exact path="/" component={Login} />
          {/* <Registration /> */}
          {/* <Potluck /> */}
          {/* <Login /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

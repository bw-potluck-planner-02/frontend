import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Potluck from "./components/Potluck";
import Login from "./components/Login";
import Registration from "./components/Registration";

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
          <button data-testid="logoutButton" href="/" onClick={logout}>logout</button>
        </header>
        {/* <Switch> */}
        <PrivateRoute exact path='/potluck' component={Potluck} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
          
          <Route exact path="/" component={Login} />
          {/* <Registration /> */}
          <Potluck />
          {/* <Login /> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;

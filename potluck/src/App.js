import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Potluck from "./components/Potluck";

import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div>
        <header>
        <h1>Potluck Planner</h1>
        </header>
        <Switch>
        <Route path="/login" component={Login} />
          
      
        <Route path="/register" component={Registration} />
          <Registration />

        <Route path='/potluck' />
          {/* <Potluck /> */}

          <Route exact path="/" component={Login} />
          {/* <Login /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;

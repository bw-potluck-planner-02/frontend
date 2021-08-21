import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Potluck from "./components/Potluck";

import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div>
        <h1>Potluck Planner</h1>

        <Route path="/login" component={Login}>
          <Login />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path='/potluck'>
          <Potluck />
        </Route>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function RenderMyProfilePage(props) {
  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <span className="navspans"></span>
          <Link to="/login"> Login</Link>
          <span className="navspans"></span>
          <Link to="/dashboard">DashBoard</Link>
          <span className="navspans"></span>
          <Link to="/help">Help</Link>
        </nav>
      </header>
      <div className="content-container">
        <h1>My Profile</h1>
      </div>
    </div>
  );
}
export default RenderMyProfilePage;

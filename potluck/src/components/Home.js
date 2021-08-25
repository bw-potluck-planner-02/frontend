import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "login";
};

const StyledHome = styled.div`
  box-sizing: border-box;
  height: 90vh;
  background: url("https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .main {
    background: white;
    width: 40%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .main h1 {
    margin: 0 auto;
    font-size: 70px;
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: center;
    width: 40%;
    justify-content: space-evenly;
    margin: 0 auto;
  }

  .button-container a {
    display: flex;
    align-items: center;
    background: none;
  }
`;

export default function Home() {
  const routeToPotluck = () => {};

  return (
    <StyledHome>
      <header>
        <h1>Potluck Planner</h1>

        <nav>
          <span className="navspans">
            <Link to="/">Home</Link>
          </span>
          {/* <span className="navspans"><Link to="/login">Login</Link></span> */}
          <span className="navspans">
            <Link to="/dashboard">DashBoard</Link>
          </span>
          <span className="navspans">
            <Link to="/my-profile">My&nbsp;Profile</Link>
          </span>
          <span className="navspans">
            <Link to="/help">Help</Link>
          </span>
          <span className="navspans">
            <Link to href="/" onClick={logout}>
              logout
            </Link>
          </span>
        </nav>
      </header>
      <div className="main">
        <h1>Potluck Planning Made Easy</h1>
        <div className="button-container">
          <Link to="/landing">
            <button onlick={routeToPotluck} className="create-acctBtn">
              Create an Account
            </button>
          </Link>

          <Link to="/login">
            <button onlick={routeToPotluck} className="loginBtn">
              Login
            </button>
          </Link>
        </div>
      </div>
    </StyledHome>
  );
}

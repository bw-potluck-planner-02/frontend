import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




const StyledHome = styled.div`
    box-sizing: border-box;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .whole {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .main {
        background: white;
        width: 40%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        border: 10px double #284B63;
    }
    
    .main h1 {
        margin: 0 auto;
        font-size: 60px;
        text-align: center;
        color: #284B63;
    }

    .main h3 {
        padding: 3%;
        font-size: 15px;
        color: #3C6E71;
    }

    .button-container a {
        display: flex;
        align-items: center;
        background: none;
        margin: 5%;
        
    }
    button {
        background-color: #284B63 ;
        padding: 15px;
        text-decoration: none;
        font-size: 15px;
        color: #D9D9D9;
    }
`;

export default function Home() {
  const routeToPotluck = () => {};

  return (
    <StyledHome>
      <header>
        <h1>Potluck Planner</h1>


        <StyledHome>
            <header>
                <h1>POTLUCK PLANNER</h1>
                <nav>
                    <span className="navspans"><Link to="/">Home</Link></span>
                    {/* <span className="navspans"><Link to="/login">Login</Link></span> */}
                    <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
                    <span className="navspans"><Link to="/my-profile">My Profile</Link></span>
                    <span className="navspans"><Link to="/help">Help</Link></span>
                </nav>
            </header>
            <div className='whole'>
                <div className='main'>
                    <h3>Tired of being the one stuck planning EVERY potluck? Well, let us make it easier.</h3>
                    <h1>Welcome to<br/>The Potluck Planner</h1>
                    <div className='button-container'>
                        <Link to='/landing'>
                            <button
                                onlick={routeToPotluck}
                                className='create-acctBtn'>
                                Create an Account
                            </button>
                        </Link>

                        <Link to='/login'>
                            <button
                                onlick={routeToPotluck}
                                className='loginBtn'>
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </StyledHome>
    )
}


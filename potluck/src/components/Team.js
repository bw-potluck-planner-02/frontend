import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledTeam = styled.div`
    display: flex;
    box-sizing: border-box;

    .whole {
        width: 100%;
        height: 100vh;
    }
    

    .card {
        width: 450px;
    }

    .card p {
        width: 300px;
        text-align: center;
        margin-left: 20%;
    }
     .card h2 h3 {
        text-align: left;
     }
`

export default function Team() {
    return (
       <StyledTeam>
           <div className='whole'>
            <header>
                <h1>POTLUCK PLANNER</h1>
                <nav>
                    <span className="navspans"><Link to="/">Home</Link></span>
                    <span className="navspans"><Link to="/dashboard">DashBoard</Link></span>
                    <span className="navspans"><Link to="/my-profile">My Profile</Link></span>
                    <span className="navspans"><Link to="/meet-team">Meet&nbsp;our&nbsp;Team</Link></span>
                </nav>
            </header>
            <h1>Meet Our Team</h1>
            <div className='card'>
                <img
                className='card-photo'
                src='https://picsum.photos/300'
                alt='profile-pic'
                />
                <h2>Name of person</h2>
                <h3>Role of team member</h3>
                <p>a bunch of filler text. we only need a few sentences for the bio </p>
            </div>
        </div>
       </StyledTeam> 
        
    )
}
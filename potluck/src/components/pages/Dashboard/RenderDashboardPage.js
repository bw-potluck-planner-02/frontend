import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, Switch, useHistory } from "react-router-dom";
import { CreateNewEvent } from "../CreateNewEvent";
import PrivateRoute from "../../../utils/Private";
import { TOGGLE_EDITING } from "../../../Reducers/eventsReducer";

import DashboardHost from "../Dashboard/DashBoardHostEvents";
import DashboardGuest from "../Dashboard/DashBoardGuestEvents";
import GuestRsvp from "../../../components/GuestRsvp";

const MainDiv = styled.div`
  height: 87.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;

  h1 {
    margin-top: -2%;
    font-size: 3rem;
  }
  button {
    border-radius: 25px;
    width: 80%;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    font-weight: 700;
    background: rgb(34, 193, 195);
    background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
    border: 0px;
    cursor: pointer;
    transition: opacity 0.25s ease-out;
  }
  button:hover {
    opacity: 0.85;
  }
  .content-container {
    border-radius: 30px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 40%;

    .attending button {
      border-radius: 25px;
      width: 40%;
      padding: 3.5%;
      font-size: 1.3rem;
      color: white;
      font-weight: 700;
      background: rgb(34, 193, 195);
      background: linear-gradient(
        90deg,
        rgba(34, 193, 195, 1) 0%,
        #284b63 100%
      );
      border: 0px;
      cursor: pointer;
      transition: opacity 0.25s ease-out;
      margin-bottom: 4.5%;
    }
  }
`;

function RenderDashboardPage() {
  const eventsState = useSelector((state) => state.eventsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewEvent = (e) => {
    e.preventDefault();
    dispatch({ type: TOGGLE_EDITING });
    history.push("/dashboard/new-event");
  };

  const logout = (e) => {
    localStorage.removeItem("token");
    window.location.href = "login";
    // console.log('LOGGED OUT?:', localStorage.headers.authorization);
  };

  return (
    <div className="page">
      <header>
        <h1>POTLUCK PLANNER</h1>
        <nav>
          <Link to="/landing">Home</Link>
          <span className="navspans"></span>
          <Link to="/login"> Login</Link>
          <span className="navspans"></span>
          <Link to="/my-profile">My Profile</Link>
          <span className="navspans"></span>
          <Link to="/help">Help</Link>
          <span className="navspans"></span>
          <Link to href="/" onClick={logout}>
            Logout
          </Link>
        </nav>
      </header>
      <MainDiv className="page">
        <div className="content-container">
          {/*Going to update next div with classname "dashboard-container" that should increase font add colors, waiting until its complete*/}
          <div className="dashboard-container">
            <div className="formColumn">
              {!eventsState.editing ? (
                <button
                  className="cssanimation pepe sequence"
                  onClick={createNewEvent}
                >
                  Create New Potluck
                </button>
              ) : null}
              {eventsState.editing ? <CreateNewEvent /> : null}
              {!eventsState.editing ? <DashboardHost /> : null}
            </div>
            <div className="formColumn attending">
              {!eventsState.editing ? <DashboardGuest /> : null}
            </div>
          </div>
        </div>
        <div className="dashboard-container">
          <Switch>
            <PrivateRoute path="/dashboard/new-event/step-two"></PrivateRoute>
            <PrivateRoute path="/dashboard/guest-rsvp">
              <GuestRsvp />
            </PrivateRoute>
          </Switch>
        </div>
      </MainDiv>
    </div>
  );
}
export default RenderDashboardPage;

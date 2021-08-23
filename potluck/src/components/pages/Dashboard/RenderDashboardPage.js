import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Switch, useHistory } from 'react-router-dom';
import { CreateNewEvent } from 'CreateNewEvent/';
import PrivateRoute from 'PrivateRoute';
import { TOGGLE_EDITING } from 'reducers/eventsReducer';

import DashboardHost from '../Dashboard/DashBoardHostEvents';
import DashboardGuest from '../DashboardGuestEvents';
import GuestRsvp from '/GuestRsvp';

function RenderDashboardPage() {
  const eventsState = useSelector(state => state.eventsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewEvent = e => {
    e.preventDefault();
    dispatch({ type: TOGGLE_EDITING });
    history.push('/dashboard/new-event');
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
        </nav>
      </header>
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
          <div className="formColumn">
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
    </div>
  );
}
export default RenderDashboardPage;

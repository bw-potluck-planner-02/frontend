import React from 'react';

import Dropdown from '../../../components/DropDown';
import { states } from '../../../components/constants/index';

const RenderCreateNewEventPage = props => {
  console.log('PROPS for RednerCreateNewEvent', props.loading)
  return (
  <section>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <div className="formColumn">
          <h2>Event Address</h2>
          <input
            type="text"
            name="address_one"
            placeholder="Address Line One"
            value={props.values.address_one}
            onChange={props.handleChanges}
          />
          {/* <input
            type="text"
            name="address_two"
            placeholder="Address Line Two"
            value={props.values.address_two}
            onChange={props.handleChanges}
          /> */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={props.values.city}
            onChange={props.handleChanges}
          />
          <Dropdown
            data={states}
            name="state"
            value={props.values.state}
            onChange={props.handleChanges}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip"
            value={props.values.zip}
            onChange={props.handleChanges}
          />
        </div>
        <div className="formColumn">
          <h2>Event Details</h2>
          <input
            type="text"
            name="potluck_name"
            placeholder="potluck_name"
            value={props.values.potluck_name}
            onChange={props.handleChanges}
          />
          {/* <input
            type="text"
            name="contact_phone"
            placeholder="Contact Phone"
            value={props.values.contact_phone}
            onChange={props.handleChanges}
          /> */}
          <input
            type="date"
            name="potluck_date"
            placeholder="potluck_date"
            value={props.values.potluck_date}
            onChange={props.handleChanges}
          />
          <div className="start-end-intstructions">
            <input
              type="text"
              name="potluck_time"
              placeholder="potluck_time"
              value={props.values.potluck_time}
              onChange={props.handleChanges}
            />
            {/* <input
              type="text"
              name="end_time"
              placeholder="End Time"
              value={props.values.end_time}
              onChange={props.handleChanges}
            /> */}
            <textarea
              height="5"
              name="potluck_description"
              placeholder="potluck_description Special instructions..."
              value={props.values.potluck_description}
              onChange={props.handleChanges}
            />
            {/* <div>
              {!props.loading ? (
                
                <button>{props.buttonText}</button>
              ) : (
                <button disabled>Loading...</button>
              )}
            </div> */}
            <button>submit</button>
          </div>
        </div>
      </div>
    </form>
  </section>
  
  )
              };

export default RenderCreateNewEventPage;

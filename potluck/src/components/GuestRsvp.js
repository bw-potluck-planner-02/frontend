import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useAPI } from '../../hooks/useAPI';
import {
  EVENT_DATA_START,
  EVENT_DATA_SUCCESS,
  EVENT_DATA_ERROR,
  RSVP_ADD_ITEM,
} from '../../state/reducers/eventsReducer';

const state = {
  id: 163,
  date: '2020-08-28',
  event_title: 'Picnic',
  address_one: '11725 SE 193rd Pl',
  address_two: 'Apt 107',
  city: 'Venice',
  state: 'Florida',
  zip: '34285',
  contact_phone: '2063532979',
  start_time: '4:00',
  end_time: '5:00',
  special_instructions: 'Park at home',
  user_id: 26,
  host: {
    first_name: 'David',
    last_name: 'Mark',
    email: 'davidmark@yahoo.com',
  },
  menu_items: [
    {
      id: 116,
      item_name: 'Biscuts',
      event_id: 163,
      guest_id: null,
    },
    {
      id: 117,
      item_name: 'Bacon',
      event_id: 163,
      guest_id: null,
    },
    {
      id: 118,
      item_name: 'Pie',
      event_id: 163,
      guest_id: null,
    },
  ],
  guests: [
    {
      id: 20,
      first_name: 'Dana White',
      email: 'danaw@mail.com',
      rsvp_pending: true,
      attending: false,
      event_id: 163,
      user_id: null,
    },
  ],
};

const initialFormValues = {
  attending: false,
};

const GuestRsvp = () => {
  const eventsState = useSelector(state => state.eventsReducer);
  const dispatch = useDispatch();
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  const [data, moveData, error] = useAPI({
    method: 'get',
    url: '/event/163',
    data: {},
  });

  useEffect(() => {
    dispatch({ type: EVENT_DATA_START });
    moveData()
      .then(res => {
        dispatch({ type: EVENT_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: EVENT_DATA_ERROR, payload: err });
      });
  }, []);

  const addItem = item => {
    console.log(item);
    dispatch({ type: RSVP_ADD_ITEM, payload: item });
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={submit}>
        <div className="formContainer">
          <div className="formColumn">
            <h2>You're invited to: {state.event_title}</h2>
            <h3>
              Hosted by: {state.host.first_name} {state.host.last_name}
            </h3>
            <p>
              Date: {state.date}
              <br />
              Address: {state.address_one} {state.address_two}
              <br />
              Start Time: {state.start_time}
              <br />
              Start Time: {state.end_time}
              <br />
            </p>
            <p>
              <input
                type="checkbox"
                name="attending"
                checked={values.attending === true}
                onChange={handleChanges}
              />
              &nbsp; Yes, I will be attending.
            </p>
            <div>
              <h4>Select What You Want To Bring</h4>
              <ul>
                {state.menu_items.map(item => (
                  <li key={item.id} onClick={() => addItem(item)}>
                    <span className="itemList">{item.item_name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="formColumn"></div>
          <h4>You have selected...</h4>
          <ul>
            {eventsState.rsvpAddItem.map(item => (
              <li key={item.id}>
                <span className="itemList">{item.item_name}</span>
              </li>
            ))}
          </ul>
          <div>
            <button>CONFIRM ATTENDANCE</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default GuestRsvp;

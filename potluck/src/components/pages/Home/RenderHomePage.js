import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../../index.css';
import { states } from '../../constants/index';
import { useForm } from '../../hooks/useForm';
import { useAPI } from '../../../hooks/useAPI';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from '../../../components/DropDown';
import {
    USER_EVENT_START,
    USER_EVENT_SUCCESS,
    USER_EVENT_ERROR,
} from '../../../state/reducers/userReducer';

const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    address_one: '',
    address_two: '',
    city: '',
    state: '',
    zip: '',
    password: '',
};

function RenderHomegPage(props) {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the Login route

    const dispatch = useDispatch();
    const state = useSelector(state => state.userReducer);
    const [values, handleChanges, resetForm] = useForm(initialFormValues);
    let history = useHistory();
    const [data, moveData, error] = useAPI({
        method: 'post',
        url: '/user/register',
        data: values,
    });

    const postRegister = () => {
        dispatch({ type: USER_EVENT_START });
        moveData()
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.token);
                dispatch({
                    type: USER_EVENT_SUCCESS,
                    payload: res.user,
                });
                console.log(state);
                history.push('/dashboard');
                resetForm();
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: USER_EVENT_ERROR, payload: err });
            });
    };

    const register = e => {
        e.preventDefault();
        // console.log(values);
        postRegister();
    };
    return (
        <>
            <div className="page">
                <header>
                    <h1>POTLUCK PLANNER</h1>
                    <nav>
                        <Link to="/login"> Login</Link>
                        <span className="navspans"></span>
                        {/* <Link to="/dashboard">DashBoard</Link>
                        <span className="navspans"></span>
                        <Link to="/my-profile">My Profile</Link>
                        <span className="navspans"></span>
                        <Link to="/help">Help</Link> */}
                    </nav>
                </header>

                <div className="content-container">
                    <div className="introduction">
                        <h1>Oh no! All chips and no meat again?</h1>
                        <p>
                            Welcome to Potluck planner, the easy way to figure out
                            who’s bringing what to your next potluck.
                        </p>
                        <h2>
                            Create your account today. It’s free.{' '}
                        </h2>
                        <div>

                            <h1>Don't Miss Out!</h1>

                        </div>
                    </div>
                    <div className="form">
                        <section>
                            <h2>Create an Account to Get Started!</h2>
                            <form onSubmit={register}>
                                <div>
                                    <input
                                        type="text"
                                        required
                                        name="first_name"
                                        placeholder="First Name"
                                        value={values.first_name}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        type="text"
                                        required
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={values.last_name}
                                        onChange={handleChanges}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChanges}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="address_one"
                                        placeholder="Address 1"
                                        value={values.address_one}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        type="text"
                                        name="address_two"
                                        placeholder="Address 2"
                                        value={values.address_two}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={values.city}
                                        onChange={handleChanges}
                                    />
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="Zip Code"
                                        value={values.zip}
                                        onChange={handleChanges}
                                    />

                                    <Dropdown
                                        data={states}
                                        name="state"
                                        value={values.state}
                                        onChange={handleChanges}
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={values.password}
                                        onChange={handleChanges}
                                    />
                                </div>

                                {!state.loading ? (
                                    <button>CREATE MY ACCOUNT</button>
                                ) : (
                                    <button disabled>Loading...</button>
                                )}
                            </form>

                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
export default RenderHomePage;

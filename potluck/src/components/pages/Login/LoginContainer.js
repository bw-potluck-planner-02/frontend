import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAPI } from "../../../components/hooks/useAPI";
import { useForm } from "../../../components/hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import {
  USER_EVENT_START,
  USER_EVENT_SUCCESS,
  USER_EVENT_ERROR,
} from "../../../Reducers/userReducer";
import { SET_CURRENT_USER } from "../../../Reducers/eventsReducer";

const initialFormValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  let history = useHistory();
  const [data, moveData, error] = useAPI({
    method: "post",
    url: "/user/login",
    data: values,
  });

  const postLogin = () => {
    dispatch({ type: USER_EVENT_START });
    moveData()
      .then((res) => {
        // console.log(res);
        localStorage.setItem("token", res.token);
        dispatch({
          type: USER_EVENT_SUCCESS,
          payload: res.user,
        });
        dispatch({
          type: SET_CURRENT_USER,
          payload: res.user.id,
        });
        history.push("/dashboard");
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: USER_EVENT_ERROR, payload: err });
      });
  };

  const login = (e) => {
    e.preventDefault();
    postLogin();
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>POTLUCK PLANNER</h1>
          <nav>
            <Link to="/landing"> Home</Link>
            <span className="navspans"></span>
            <Link to="/dashboard">DashBoard</Link>
            <span className="navspans"></span>
            <Link to="/my-profile">My Profile</Link>
            <span className="navspans"></span>
            <Link to="/help">Help</Link>
          </nav>
        </header>
        <div className="content-container">
          <div className="form">
            <section>
              <h1>Login To Your Account</h1>
              <form onSubmit={login}>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={values.email}
                  onChange={handleChanges}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChanges}
                />
                {!state.loading ? (
                  <button>Log In</button>
                ) : (
                  <button disabled>Loading...</button>
                )}
              </form>
              ​
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

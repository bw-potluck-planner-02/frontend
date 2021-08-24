import React, { useState } from "react";

import styled from "styled-components";
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
  username: "",
  password: "",
};

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
`;

const StyledMainPage = styled.div`
  height: 80vh;
  border: 1px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledChild = styled.div`
  border: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  padding: 0 5%;
  form {
    border: 1px solid blue;
    align-items: center;
    padding: 4%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-items: space-between;
    width: 100%;
  }
  button {
    margin-top: 20%;
    border: blue solid 1px;
  }
`;
const StyledInputs = styled.div`
  border: solid black 1px;
  padding: 2%;
`;
const LoginPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const [values, handleChanges, resetForm] = useForm(initialFormValues);
  let history = useHistory();
  const [data, moveData, error] = useAPI({
    method: "post",
    url: "/api/auth/login",
    data: values,
  });

  const postLogin = () => {
    dispatch({ type: USER_EVENT_START });
    moveData()
      .then((res) => {
        console.log("POST Login Resp:", res);
        console.log("TOKEN", res.token);
        localStorage.setItem("token", res.token);
        dispatch({
          type: USER_EVENT_SUCCESS,
          payload: res.username,
        });
        dispatch({
          type: SET_CURRENT_USER,
          payload: res.user_id,
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
        <StyledHeader>
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
        </StyledHeader>
        <StyledMainPage>
          <StyledChild>
            <section>
              <h1>Login</h1>
              <form onSubmit={login}>
                <StyledInputs>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={values.email}
                    onChange={handleChanges}
                  />
                </StyledInputs>
                <StyledInputs>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChanges}
                  />
                </StyledInputs>
                {!state.loading ? (
                  <button>Log In</button>
                ) : (
                  <button disabled>Loading...</button>
                )}
              </form>
              ​
            </section>
          </StyledChild>
        </StyledMainPage>
      </div>
    </>
  );
};

export default LoginPage;

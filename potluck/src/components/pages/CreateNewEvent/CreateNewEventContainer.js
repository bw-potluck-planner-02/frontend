import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../components/hooks/useForm";
import { useAPI } from "../../../components/hooks/useAPI";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_EVENT_START,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  EDIT_EVENT_SUCCESS,
} from "../../../Reducers/eventsReducer";
import RenderCreateNewEventPage from "./RenderCreateNewEventPage";
import StepTwoContainer from "./StepTwo/StepTwoContainer";
import StepThreeContainer from "./StepThree/StepThreeContainer";

const initialFormValues = {
  potluck_date: "",
  potluck_name: "",
  address_one: "",
  // address_two: '',
  city: "",
  state: "",
  zip: "",
  // contact_phone: '',
  potluck_time: "",
  // end_time: '',
  potluck_description: "",
};

//step1 name, when, where
//step2 add items to bring
//step3 fill guest list!

const StyledContainer = styled.div`
  padding: 5% 0;

  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  .newEventProgress {
    display: flex;
    justify-content: center;

    justify-content: space-evenly;
    margin: -4%;
  }
`;

const CreateNewEvent = (props) => {
  const userState = useSelector((state) => state.userReducer);
  const eventsState = useSelector((state) => state.eventsReducer);
  const history = useHistory();
  const buttonText = eventsState.editEvent ? "SAVE" : "NEXT STEP";
  const [values, handleChanges, resetForm, setValues] = useForm(
    eventsState.editEvent ? eventsState.currentEvent[0] : initialFormValues
  );
  const [currentStep, setCurrentStep] = useState("");
  const dispatch = useDispatch();
  const [data, moveData, error] = useAPI({
    method: "post",
    url: "/api/potlucks",
    data: {
      ...values,
      // user_id: userState.user_id.id,
      potluck_name: values.potluck_name,
      potluck_description: values.potluck_description,
      potluck_date: values.potluck_date,
      potluck_time: values.potluck_time,
      potluck_location: `${values.address_one}, ${values.city}, ${values.state}, ${values.zip}`,
      organizer: 3,
    },
  });

  const [dataPut, putData, errorPut] = useAPI({
    method: "put",
    url: `/api/potlucks/:id${eventsState.currentEventID}`,
    data: {
      // ...values,
      // user_id: userState.user.id,
    },
  });

  const postEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    moveData()
      .then((res) => {
        console.log("PostEvent Resp: CreateNewEventContainer", res);
        const newEvent = {
          ...res,
          event_id: res.id,
          menu_items: [],
          guests: [],
        };
        dispatch({
          type: ADD_EVENT_SUCCESS,
          payload: newEvent,
        });
        // resetForm();
        setCurrentStep("two");
        history.push("/dashboard/new-event/step-two");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const putEvent = () => {
    dispatch({ type: ADD_EVENT_START });
    putData()
      .then((res) => {
        console.log(res);
        const newEvent = {
          ...res,
          event_id: res.id,
          menu_items: [],
          guests: [],
        };
        dispatch({
          type: EDIT_EVENT_SUCCESS,
          payload: newEvent,
        });
        // resetForm();
        setCurrentStep("");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_EVENT_ERROR, payload: err });
      });
  };

  const submit = (e) => {
    e.preventDefault();
    !eventsState.editEvent ? postEvent() : putEvent();
  };

  return (
    <StyledContainer>
      {!eventsState.editing && null}
      <h2>Let's Create Your Event</h2>
      <div className="newEventProgress">
        {/* Progress bar container */}
        <h4>STEP 1 </h4>
        <h4>STEP 2</h4>
        <h4>STEP 3</h4>
      </div>
      {currentStep === "two" ? (
        <StepTwoContainer setCurrentStep={setCurrentStep} />
      ) : currentStep === "three" ? (
        <StepThreeContainer setCurrentStep={setCurrentStep} />
      ) : (
        <RenderCreateNewEventPage
          values={values}
          handleChanges={handleChanges}
          loading={eventsState.loading}
          buttonText={buttonText}
          submit={submit}
        />
      )}
    </StyledContainer>
  );
};

export default CreateNewEvent;

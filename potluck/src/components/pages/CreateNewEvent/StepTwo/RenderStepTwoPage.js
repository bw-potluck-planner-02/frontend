import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  input {
    text-align: center;
    padding: 3% 8%;
    border: none;
    border-radius: 25px;
  }
`;

const RenderStepTwo = (props) => {


  return(
  <section>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <StyledDiv className="formColumn">
          <h2>What should guests bring?</h2>
          <input
            type="text"
            name="item_name"
            placeholder="Enter items"
            value={props.value}
            onChange={props.handleChanges}
          />
          <div>
            {!props.loading ? (
              <button>{props.buttonText}</button>
            ) : (
              <button disabled>Loading...</button>
            )}
          </div>
        </StyledDiv>
        <div className="formColumn">
          <div>
            <h2>Current Items</h2>
          </div>
          <div>
            <ul>
              {props.state.map((item) => (
                <li key={item.id} onClick={() => props.editItem(item)}>
                  <span className="itemList">
                    <span
                      className="delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        props.deleteItem(item.id);
                      }}
                    >
                      X&nbsp;&nbsp;
                    </span>
                    {item.food_name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {props.state.length > 0 ? (
              <button onClick={props.nextStep}>NEXT STEP</button>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  </section>
);
            }
export default RenderStepTwo;

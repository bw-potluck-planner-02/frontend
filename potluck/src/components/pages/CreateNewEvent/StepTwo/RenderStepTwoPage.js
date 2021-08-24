import React from 'react';

const RenderStepTwo = props => (
  <section>
    <form onSubmit={props.submit}>
      <div className="formContainer">
        <div className="formColumn">
          <h2>What should guests bring?</h2>
          <input
            type="text"
            name="item_name"
            placeholder="Enter an item for guests to bring"
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
        </div>
        <div className="formColumn">
          <div>
            <h2>Current Items</h2>
          </div>
          <div>
            <ul>
              {props.state.map(item => (
                <li key={item.id} onClick={() => props.editItem(item)}>
                  <span className="itemList">
                    <span
                      className="delete"
                      onClick={e => {
                        e.stopPropagation();
                        props.deleteItem(item.id);
                      }}
                    >
                      X&nbsp;&nbsp;
                    </span>
                    {item.item_name}
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

export default RenderStepTwo;

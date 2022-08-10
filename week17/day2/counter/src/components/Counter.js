import React from "react";
import { connect } from "react-redux";

function Counter({ props, dispatch }) {
  return (
    <div>
      <h3>Clicked: {props} times</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={console.log(props)}>Increment if odd</button>
      <button>Increment async</button>
    </div>
  );
}

export default connect()(Counter);

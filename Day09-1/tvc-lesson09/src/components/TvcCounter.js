import React,{ useReducer } from 'react'
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}
export default function TvcCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div className='alert alert-success'>
        <h2>Bộ đếm: {state.count}</h2>
        <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    );
}

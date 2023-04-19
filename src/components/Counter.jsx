import React, { Component } from "react";

export function Counter({ count, onIncrement, onDecrement }) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  );
}

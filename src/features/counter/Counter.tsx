import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(30))}>
        Increment by 30
      </button>
    </div>
  );
};

export default Counter;

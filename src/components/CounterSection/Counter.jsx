import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
import { incrementCount } from "../../Redux/counterSlice";
import { decrementCount } from "../../Redux/counterSlice";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const counterGlobalValue = useSelector((state) => state.counterStore.counter);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(incrementCount(1));
  };

  let decrease = () => {
    if (counterGlobalValue > 0) {
      dispatch(decrementCount(1));
    } else {
      dispatch(decrementCount(0));
    }
  };

  console.log(counterGlobalValue);

  return (
    <div className="counter">
      <div className="container">
        <h1 className="mb-5"> Support us by Clicking (+) 🙏 </h1>
        <span className="counter__output mb-4">{counterGlobalValue}</span>
        <div className="btn__container">
          <button className="mx-2 px-5 rounded control__btn" onClick={increase}>
            +
          </button>

          <button
            className=" mx-2 px-5 rounded control__btn"
            onClick={decrease}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

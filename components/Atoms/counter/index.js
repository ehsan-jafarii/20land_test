import { useState } from "react";
import Classes from "./style.module.css";
import clsx from "clsx";
const Counter = ({ counter, increase, decrease, className }) => {
  return (
    <div className="w-full  lg:w-auto">
      <div
        className={clsx(
          "lg:grid lg:grid-flow-col lg:gap-2 flex flex-row justify-between bg-gray-200 p-1 rounded-md w-full lg:w-auto",
          className
        )}
      >
        <button className={Classes.decrease} onClick={decrease}>
          -
        </button>
        <span className={Classes.counter}>{counter}</span>
        <button className={Classes.increase} onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

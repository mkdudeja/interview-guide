import React from "react";
import { useInterval } from "./use-interval.hook";

// PROBLEM STATEMENT
// write a custom hook named `useInterval`

// 1. challages with setInterval & React
// 2. approach to the solution
// 3. write custom hook

const UseIntervalHook: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [state, setState] = React.useState(0);

  useInterval(() => {
    setCount(state + 1);
  }, 1000);
  // const callbackRef = React.useRef<() => void>();
  // React.useEffect(() => {
  //   callbackRef.current = () => {
  //     setCount(state + 1);
  //   };
  // }, [state]);

  // // problem...
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     callbackRef.current && callbackRef.current();
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setState(state + 1);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="flex flex-col justify-start items-start space-y-5">
      <h1 className="text-xl font-bold">
        Challange: <u>useInterval</u>
      </h1>
      <p>Count (with delay of 1s): {count} </p>
      <p>State (with delay of 0.5s): {state} </p>
    </div>
  );
};

export default UseIntervalHook;

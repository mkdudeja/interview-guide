import React from "react";
import { useTimeout } from "./use-timeout.hook";

// PROBLEM STATEMENT
// write a custom hook named `useTimeout`

// 1. challages with setTimeout
// 2. approach to the solution
// 3. write custom hook

const UseTimeoutHook: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(5000);

  // const callback = React.useCallback(() => {
  //     console.log("useEffect:: count", count);
  //   }, [count])

  const callbackRef = React.useRef<() => void>();
  React.useEffect(() => {
    callbackRef.current = () => {
      console.log("useEffect fixed:: ", count);
    };
  }, [count]);

  // timer...
  React.useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      console.log(`time: ${counter++} sec...`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // solution with hooks...
  useTimeout(() => {
    console.log("useTimeout fixed:: ", count);
  }, delay);

  // solution...
  // React.useEffect(() => {
  //   console.log("useEffect fixed:: timer started");
  //   const timer = setTimeout(() => {
  //     callbackRef.current && callbackRef.current();
  //   }, 5000);

  //   return () => {
  //     console.log("useEffect fixed:: timer cleared");
  //     clearTimeout(timer);
  //   };
  // }, []);

  // problem...
  React.useEffect(() => {
    console.log("useEffect timer started");
    const timer = setTimeout(() => {
      console.log("useEffect:: count", count);
    }, 5000);

    return () => {
      console.log("useEffect timer cleared");
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className="flex flex-col justify-start items-start space-y-5">
      <h1 className="text-xl font-bold">
        Challange: <u>useTimeout</u>
      </h1>
      <p>Count: {count}</p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default UseTimeoutHook;

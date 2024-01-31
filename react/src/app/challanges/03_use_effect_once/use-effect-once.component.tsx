import React from "react";
import { useEffectOnce } from "./use-effect-once.hook";

const UseEffectOnce: React.FC = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("useEffect count", count);
  }, [count]);

  useEffectOnce(() => {
    console.log("useEffectOnce count", count);
  });

  return (
    <div className="flex flex-col justify-start items-start space-y-5">
      <h1 className="text-xl font-bold">Challange: useEffectOnce</h1>
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

export default UseEffectOnce;

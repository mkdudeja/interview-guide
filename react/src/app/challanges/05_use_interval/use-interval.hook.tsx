import React from "react";

export function useInterval(callback: () => void, delay: number) {
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        callbackRef.current && callbackRef.current();
      }, delay);

      return () => {
        clearInterval(interval);
      };
    }
  }, [delay]);
}

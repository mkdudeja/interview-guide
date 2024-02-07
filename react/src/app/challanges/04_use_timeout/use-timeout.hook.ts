import React from "react";

export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = React.useRef<() => void>();

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    console.log("useTimeout:: timer started");

    const timer = setTimeout(() => {
      callbackRef.current && callbackRef.current();
    }, delay);

    return () => {
      console.log("useTimeout:: timer cleared");
      clearTimeout(timer);
    };
  }, [delay]);
}

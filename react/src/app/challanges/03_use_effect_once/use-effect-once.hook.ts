import React, { EffectCallback } from "react";

export function useEffectOnce(effect: EffectCallback) {
  const ref = React.useRef(false);

  React.useEffect(() => {
    if (ref.current) {
      return;
    }

    // we are inside for the 1st time
    ref.current = true;
    const cleanup = effect();

    return () => {
      cleanup && cleanup();
    };
  }, [effect]);
}

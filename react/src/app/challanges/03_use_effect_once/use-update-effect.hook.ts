import React, { DependencyList, EffectCallback } from "react";

export function useUpdateEffect(
  effectCallback: EffectCallback,
  deps: DependencyList
) {
  const ref = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }

    const cleanup = effectCallback();

    return () => {
      cleanup && cleanup();
    };
  }, [effectCallback, deps]);
}

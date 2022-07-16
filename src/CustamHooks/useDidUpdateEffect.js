import { useRef, useEffect, EffectCallback, DependencyList } from 'react';

// 初回の実行がスキップされるuseEffect
export function useDidUpdateEffect(fn, deps) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      fn();
    }
  }, deps);
}
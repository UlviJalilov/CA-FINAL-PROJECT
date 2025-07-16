// hooks/useOutsideClick.ts
import { useEffect, RefObject } from "react";

export function useOutsideClick(
  refs: RefObject<HTMLElement | null>[],
  callback: () => void,
  active: boolean
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        active &&
        refs.every((ref) => ref.current && !ref.current.contains(target))
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callback, active]);
}

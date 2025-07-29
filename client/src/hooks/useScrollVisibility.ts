// hooks/useScrollVisibility.ts
import { useEffect, useState } from "react";

export function useScrollVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const fullHeight = document.body.scrollHeight;

   
      setVisible(scrollTop > fullHeight / 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible;
}

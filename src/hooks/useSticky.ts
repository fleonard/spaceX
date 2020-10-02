import { useEffect, useState } from "react";

export const useSticky = (ref: any, top: number) => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (ref && ref.current && ref.current.getBoundingClientRect()) {
      setSticky(ref.current.getBoundingClientRect().top <= top);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  return isSticky;
};

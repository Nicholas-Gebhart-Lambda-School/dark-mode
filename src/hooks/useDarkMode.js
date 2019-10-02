import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [darkValue, setDarkValue] = useLocalStorage("dark");
  useEffect(() => {
    darkValue
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkValue]);

  const toggleMode = e => {
    e.preventDefault();
    setDarkValue(!darkValue);
  };
  return [darkValue, toggleMode];
};

import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [darkValue, setDarkValue] = useLocalStorage("dark");
  useEffect(() => {
    darkValue
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkValue]);
  return [darkValue, setDarkValue];
};

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== "string") {
    throw new Error("key must be a string to be stored in localStorage");
  }
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialValue;
  });

  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

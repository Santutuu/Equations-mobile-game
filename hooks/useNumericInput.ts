import { useState } from "react";

export default function useNumericInput() {
  const [answer, setAnswer] = useState("");

  function pressNumber(value: string) {
    setAnswer((prev) => prev + value);
  }

  function deleteLast() {
    setAnswer((prev) => prev.slice(0, -1));
  }

  function clear() {
    setAnswer("");
  }

  return {
    answer,
    pressNumber,
    deleteLast,
    clear,
  };
}
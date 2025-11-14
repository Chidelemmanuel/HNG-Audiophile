"use client";

import { useState } from "react";

export default function Counter () {
  const [number, setNumber] = useState (0);

  function Increment () {
    setNumber(number + 1);
  }

  function Decrement () {
    setNumber(number - 1);
  }

  return (
    <div>

      <span className="flex bg-[#F1F1F1] px-3 py-3">
        <button onClick={Increment} className="px-5">+</button>
        <p className="font-bold w-5">{number}</p>
        <button onClick={Decrement} className="px-5">-</button>
      </span>

    </div>
  )
}
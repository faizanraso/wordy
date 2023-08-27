"use client";

import React, { useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSuccess(true);
    console.log("test")
  }

  return (
    <div className="mb-6 relative">
      <form onSubmit={checkAnswer}>
        <input
          type="text"
          autoFocus
          required
          className={`text-center font-medium text-2xl uppercase justify-center tracking-wider flex w-96 p-3 text-gray-900 border border-gray-300 rounded-lg
          ${isSuccess ? "border-green-700" : "border-blue-700"} `}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="absolute top-2 right-2">
          <button
            className="rounded-full py-3 px-1 hover:bg-gray-100"
            type="submit"
          >
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

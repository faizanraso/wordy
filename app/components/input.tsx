"use client";

import React, { useState } from "react";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSuccess(false);
    setIsFailed(false);
    if (inputValue.toLowerCase() == "yes") {
      setIsSuccess(true);
      setInputValue("");
    } else {
      setIsFailed(true);
      console.log("failed");
    }
  }

  return (
    <div className="mb-6 relative">
      <form onSubmit={checkAnswer}>
        <input
          type="text"
          autoFocus
          required
          className={`text-center font-medium text-2xl uppercase justify-center tracking-wider flex w-96 p-3 text-gray-900 border border-gray-300 rounded-lg transition duration-200
          ${
            isSuccess
              ? "outline-green-700 border-green-700 shadow-md shadow-green-700/40"
              : isFailed
              ? "outline-red-700 border-red-700 shadow-md shadow-red-700/40"
              : "outline-blue-700 border-gray-300"
          } `}
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
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

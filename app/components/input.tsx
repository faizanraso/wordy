"use client";

import React from "react";

export default function Input() {
  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("test");
  }

  return (
    <div className="mb-6 relative">
      <form onSubmit={checkAnswer}>
        <input
          type="text"
          autoFocus
          required
          className="text-center font-medium text-2xl uppercase justify-center tracking-wider flex w-96 p-3 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-700 focus:border-blue-700"
        />
        <div className="absolute top-2 right-2">
          <button className="rounded-lg py-3 px-1" type="submit">
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

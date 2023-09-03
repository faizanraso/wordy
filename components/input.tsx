"use client";

import React, { useRef, useState } from "react";

export default function Input(props: { setUserWords: any; userWords: any }) {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [audioDom, setAdudioDom] = useState<HTMLAudioElement | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTimeout(() => {
      setIsSuccess(false);
      setIsFailed(false);
    }, 700);

    if (inputValue.toLowerCase() == "yes") {
      // correct.play();
      setIsSuccess(true);
      setInputValue("");
      props.setUserWords([inputValue.toLowerCase(), ...props.userWords]);
    } else {
      // error.play();
      setShakeEffect(true);
      setIsFailed(true);
    }
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="mb-6 relative">
      <form onSubmit={checkAnswer}>
        <div
          className={`${shakeEffect ? "animate-shake" : "animate-none"}`}
          onAnimationEnd={() => setShakeEffect(false)}
        >
          <input
            ref={inputRef}
            type="text"
            autoFocus
            required
            className={`text-center font-medium text-2xl uppercase justify-center tracking-wider flex w-[350px] p-3 text-gray-900 border-2 border-gray-300 rounded-lg select-none outline-none transition duration-200
          ${
            isSuccess
              ? "border-green-700 shadow-lg shadow-green-700/40"
              : isFailed
              ? "border-red-700 shadow-lg shadow-red-700/40"
              : "outline-none border-gray-300"
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
        </div>
      </form>
    </div>
  );
}

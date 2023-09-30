"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Input(props: { setUserWords: any; userWords: any }) {
  const [inputValue, setInputValue] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [topic, setTopic] = useState<string | undefined>();

  const inputRef = useRef<HTMLInputElement>(null);
  const correctRef = useRef<HTMLAudioElement>(null);
  const errorRef = useRef<HTMLAudioElement>(null);
  let reset: NodeJS.Timeout | undefined;

  useEffect(() => {
    async function startGame() {
      // start timer
    }

    if (isStarted) startGame();
  }, [isStarted]);

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    clearTimeout(reset);

    reset = setTimeout(() => {
      setIsSuccess(false);
      setIsFailed(false);
    }, 300);

    if (!isStarted && inputValue.toLowerCase() == "ready") {
      // play some game start sound
      setInputValue("");
      setIsStarted(true);
    } else if (inputValue.toLowerCase() == "yes") {
      playCorrectSound();
      setIsSuccess(true);
      setInputValue("");
      props.setUserWords([inputValue.toLowerCase(), ...props.userWords]);
    } else {
      playErrorSound();
      setShakeEffect(true);
      setIsFailed(true);
    }
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  function playCorrectSound() {
    if (correctRef.current) {
      correctRef.current.currentTime = 0;
      correctRef.current.play();
    }
  }

  function playErrorSound() {
    if (errorRef.current) {
      errorRef.current.currentTime = 0;
      errorRef.current.play();
    }
  }

  return (
    <>
      <div className="text-center py-4">
        {isStarted ? (
          <div className="space-y-3">
            <p className="font-semibold tracking-wide">
              Word <span className="uppercase">{topic}</span>
            </p>
            <p className="text-xs font-medium"> <span className="font-semibold">Example:</span> The word used in a sentence here</p>
          </div>
        ) : (
          <p className="font-semibold tracking-wide">
            Type &quot;READY&quot; to Start
          </p>
        )}
      </div>
      <div className="mb-6 relative">
        <form onSubmit={checkAnswer}>
          <audio
            className="hidden"
            ref={correctRef}
            preload="auto"
            src={
              "https://whpxtmfsvvizsvwcxgzc.supabase.co/storage/v1/object/public/audio/correct.wav"
            }
          />
          <audio
            className="hidden"
            ref={errorRef}
            preload="auto"
            src={
              "https://whpxtmfsvvizsvwcxgzc.supabase.co/storage/v1/object/public/audio/error.wav"
            }
          />
          <div
            className={`${shakeEffect ? "animate-shake" : "animate-none"}`}
            onAnimationEnd={() => setShakeEffect(false)}
          >
            <input
              ref={inputRef}
              type="text"
              autoFocus
              required
              className={`text-center font-medium text-2xl uppercase justify-center tracking-wider flex w-[350px] p-3 text-gray-900 border-2 border-gray-300 rounded-lg select-none outline-none transition duration-150
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
    </>
  );
}

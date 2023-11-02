"use client";

import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import useSWR from "swr";

import { fetcher } from "@/app/utils/fetcher";
import GameEndAlert from "./modals/gameEnd";
import { toTitleCase } from "@/app/utils/title-case";
import shuffleArray from "@/app/utils/shuffle-array";
import gameStartNotification from "@/app/utils/game-start-notif";

interface InputProps {
  gameWordsData: {
    level_id: string;
    definition: string;
    possibleAnswers: string[];
    userAnswer: string;
    isCorrect: boolean; //was the user answer correct
  }[];
  setGameWordsData: any;
  isStarted: boolean;
  setIsStarted: (arg0: boolean) => void;
  gameEnded: boolean;
  setGameEnded: (arg0: boolean) => void;
  setTimeRemaining: (arg0: number) => void;
}

export default function Input({
  gameWordsData,
  setGameWordsData,
  isStarted,
  setIsStarted,
  gameEnded,
  setGameEnded,
}: InputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);
  const [allWords, setAllWords] = useState<any[]>();
  const [currentWord, setCurrentWord] = useState<any>();
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  const [startTime, setStartTime] = useState<number>(0);
  const [timesArray, setTimesArray] = useState<number[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  let reset: NodeJS.Timeout | undefined;

  const { data, error, isLoading } = useSWR("/api/getLevel", fetcher);

  useEffect(() => {
    if (data) setAllWords(shuffleArray(data));
  }, [data]);

  useEffect(() => {
    if (gameEnded && inputRef.current) {
      // indicates the user was trying to solve the last question
      if (Date.now() - startTime >= 5000) {
        setTimesArray([...timesArray, Date.now() - startTime]);
      }

      setStartTime(0);
      inputRef.current.blur();
    }

    if (gameEnded) {
      setInputValue("");
    }
  }, [gameEnded]);

  useEffect(() => {
    async function startGame() {
      if (allWords) setCurrentWord(allWords[currentWordIndex]);
    }

    if (isStarted && allWords) {
      startGame();
      gameStartNotification();
    }
  }, [isStarted, allWords]);

  function checkAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    clearTimeout(reset);

    reset = setTimeout(() => {
      setIsSuccess(false);
      setIsFailed(false);
    }, 300);

    if (!isStarted && inputValue.toLowerCase() == "ready") {
      setInputValue("");
      setStartTime(Date.now());
      setTimesArray([]);
      setIsStarted(true);
    } else if (
      currentWord?.possibleAnswers.includes(inputValue.toLowerCase())
    ) {
      setIsSuccess(true);
      setTimesArray([...timesArray, Date.now() - startTime]);
      setStartTime(Date.now());
      setGameWordsData([
        {
          ...currentWord,
          isCorrect: true,
          userAnswer:
            inputValue.length <= 3 &&
            currentWord?.possibleAnswers.includes(inputValue.toUpperCase())
              ? inputValue.toUpperCase()
              : toTitleCase(inputValue),
        },
        ...gameWordsData,
      ]);
      if (allWords) setCurrentWord(allWords[currentWordIndex + 1]);
      setCurrentWordIndex(currentWordIndex + 1);
      setInputValue("");
    } else {
      setShakeEffect(true);
      setIsFailed(true);
    }
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  function handleSkip() {
    if (allWords) {
      setGameWordsData([
        {
          ...currentWord,
          isCorrect: false,
          userAnswer: "",
        },
        ...gameWordsData,
      ]);
      setCurrentWord(allWords[currentWordIndex + 1]);
      setCurrentWordIndex(currentWordIndex + 1);
      setInputValue("");
      setStartTime(Date.now());
    }
  }

  function clearInput() {
    setInputValue("");
    inputRef.current?.focus();
  }

  return (
    <section>
      <div className="items-center justify-center text-center pt-3 pb-5 w-[350px]">
        <div className="flex text-center justify-center items-center min-h-[80px]">
          {isStarted ? (
            <p className="text-sm font-medium">
              {" "}
              <span className="font-semibold">Definition:</span>{" "}
              {currentWord?.definition}
            </p>
          ) : (
            <p className="font-semibold tracking-wide text-xl">
              Type &quot;READY&quot; to Start
            </p>
          )}
        </div>
      </div>
      <div className="mb-3 relative">
        <form onSubmit={checkAnswer} noValidate>
          <div
            className={`${shakeEffect ? "animate-shake" : "animate-none"}`}
            onAnimationEnd={() => setShakeEffect(false)}
          >
            <input
              ref={inputRef}
              type="text"
              autoFocus
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
                className="flex rounded-full mt-2 py-1 px-1 hover:bg-gray-100 items-center justify-center focus:bg-gray-200"
                onClick={clearInput}
                type="reset"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  color="#000000"
                >
                  <path
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.172 14.828 12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center pt-3 gap-x-3">
            <button
              className="shadow-inner py-2.5 px-10 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold inline-flex gap-x-1 transition duration-150 disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:opacity-40 items-center justify-center"
              type="submit"
            >
              Submit
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                  stroke="#000000"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              disabled={!isStarted}
              className="py-2.5 px-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-black text-xs font-semibold inline-flex gap-x-1 transition duration-150 disabled:bg-yellow-400 disabled:hover:bg-yellow-400 disabled:opacity-40 items-center justify-center"
              onClick={handleSkip}
            >
              Skip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                fill="none"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                color="black"
              >
                <path
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7v10M6.972 5.267A.6.6 0 0 0 6 5.738v12.524a.6.6 0 0 0 .972.47l7.931-6.261a.6.6 0 0 0 0-.942L6.972 5.267Z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <Toaster />
      <GameEndAlert
        open={gameEnded}
        setOpen={setGameEnded}
        gameWordsData={gameWordsData}
        setGameWordsData={setGameWordsData}
        allWords={allWords}
        setAllWords={setAllWords}
        setCurrentWordIndex={setCurrentWordIndex}
        setInputValue={setInputValue}
        timesArray={timesArray}
        gameEnded={gameEnded}
      />
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useSWR from "swr";

import { fetcher } from "@/app/utils/fetcher";
import GameEndAlert from "./modals/gameEnd";
import { playCorrectSound, playErrorSound } from "@/app/utils/play-sounds";
import { toTitleCase } from "@/app/utils/title-case";
import shuffleArray from "@/app/utils/shuffle-array";

interface InputProps {
  setUserWords: any;
  userWords: any;
  isStarted: boolean;
  setIsStarted: (arg0: boolean) => void;
  gameEnded: boolean;
  setGameEnded: (arg0: boolean) => void;
  setTimeRemaining: (arg0: number) => void;
}

export default function Input({
  setUserWords,
  userWords,
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

  const inputRef = useRef<HTMLInputElement>(null);
  const correctRef = useRef<HTMLAudioElement>(null);
  const errorRef = useRef<HTMLAudioElement>(null);
  let reset: NodeJS.Timeout | undefined;

  const { data, error, isLoading } = useSWR("/api/getLevel", fetcher);

  useEffect(() => {
    if (data) setAllWords(shuffleArray(data));
  }, [data]);

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
      // play some game start sound

      setInputValue("");
      setIsStarted(true);
    } else if (currentWord?.answers.includes(inputValue.toLowerCase())) {
      playCorrectSound(correctRef);
      setIsSuccess(true);
      setInputValue("");
      setUserWords([toTitleCase(inputValue), ...userWords]);
      if (allWords) setCurrentWord(allWords[currentWordIndex + 1]);
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      playErrorSound(errorRef);
      console.log(inputValue);
      setShakeEffect(true);
      setIsFailed(true);
    }
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }

  function gameStartNotification() {
    toast("Start guessing synonyms!", {
      duration: 4000,
      position: "top-center",
      className: "font-semibold ",
    });
  }

  return (
    <>
      <div className="text-center py-4">
        {isStarted ? (
          <div className="space-y-3">
            <p className="font-semibold tracking-wide">
              <span className="uppercase text-xl">{currentWord?.word}</span>
            </p>
            <p className="text-xs font-medium">
              {" "}
              <span className="font-semibold">Example:</span>{" "}
              {currentWord?.example}
            </p>
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
      <Toaster />
      <GameEndAlert
        open={gameEnded}
        setOpen={setGameEnded}
        wordList={userWords}
        setUserWords={setUserWords}
        setInputValue={setInputValue}
      />
    </>
  );
}

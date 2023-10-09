"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import Header from "@/components/layout/header";
import WordList from "@/components/wordlist";
import Footer from "@/components/layout/footer";
import Timer from "@/components/timer";
import GameEndAlert from "@/components/modals/gameEnd";

export default function Home() {
  const [userWords, setUserWords] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(30);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center px-24 py-14">
        <Timer
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          userWords={userWords}
          gameEnded={gameEnded}
          setGameEnded={setGameEnded}
        />
        <Input
          setUserWords={setUserWords}
          userWords={userWords}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          gameEnded={gameEnded}
          setGameEnded={setGameEnded}
          setTimeRemaining={setTimeRemaining}
        />
        <WordList words={userWords} gameEnded={gameEnded} />
      </main>
      <Footer />
    </div>
  );
}

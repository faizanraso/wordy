"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import Header from "@/components/layout/header";
import WordList from "@/components/wordlist";
import Footer from "@/components/layout/footer";
import Timer from "@/components/timer";

export default function Home() {
  const [gameWordsData, setGameWordsData] = useState<
    {
      definition: string;
      possibleAnswers: string[];
      userAnswer: string;
    }[]
  >([]);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(45);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center px-24 py-14">
        <Timer
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          setGameEnded={setGameEnded}
        />
        <Input
          gameWordsData={gameWordsData}
          setGameWordsData={setGameWordsData}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          gameEnded={gameEnded}
          setGameEnded={setGameEnded}
          setTimeRemaining={setTimeRemaining}
        />
        <WordList gameWordsData={gameWordsData} gameEnded={gameEnded} />
      </main>
      <Footer />
    </div>
  );
}

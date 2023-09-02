"use client";

import React, { useState } from "react";
import Input from "./components/input";
import Header from "./components/layout/header";
import WordList from "./components/wordlist";

export default function Home() {
  const [userWords, setUserWords] = useState<string[]>([]);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center px-24 py-14">
        <div className="text-center py-4">
          <p className="font-semibold tracking-wide">
            Topic: <span className="uppercase">TOPIC</span>
          </p>
        </div>
        <Input setUserWords={setUserWords} userWords={userWords} />
        <WordList words={userWords} />
      </main>
    </>
  );
}

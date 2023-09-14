"use client";

import React, { useState } from "react";
import Input from "@/components/input";
import Header from "@/components/layout/header";
import WordList from "@/components/wordlist";
import Footer from "@/components/layout/footer";

export default function Home() {
  const [userWords, setUserWords] = useState<string[]>([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center px-24 py-14">
        <Input setUserWords={setUserWords} userWords={userWords} />
        <WordList words={userWords} />
      </main>
      <Footer />
    </div>
  );
}

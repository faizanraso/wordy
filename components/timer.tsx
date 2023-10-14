"use client";

import React, { useEffect, useState } from "react";

interface TimerProps {
  isStarted: boolean;
  setIsStarted: any;
  setGameEnded: any;
  timeRemaining: number;
  setTimeRemaining: (arg0: number) => void;
}

export default function Timer({
  isStarted,
  setIsStarted,
  setGameEnded,
  timeRemaining,
  setTimeRemaining,
}: TimerProps) {
  useEffect(() => {
    if (isStarted && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
    }

    if (timeRemaining <= 0) {
      setIsStarted(false);
      setGameEnded(true);
      setTimeRemaining(45);
    }
  }, [timeRemaining, isStarted]);

  return (
    <>
      <p className="font-semibold tracking-wide font-mono text-2xl">
        {timeRemaining}
      </p>
    </>
  );
}

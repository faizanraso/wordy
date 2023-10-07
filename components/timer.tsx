"use client";

import React, { useEffect, useState } from "react";

export default function Timer(props: {
  isStarted: boolean;
  setIsStarted: any;
  userWords: string[];
  gameEnded: boolean;
  setGameEnded: any;
  timeRemaining: number;
  setTimeRemaining: (arg0: number) => void;
}) {
  useEffect(() => {
    if (props.isStarted && props.timeRemaining > 0) {
      setTimeout(() => props.setTimeRemaining(props.timeRemaining - 1), 1000);
    }

    if (props.timeRemaining <= 0) {
      props.setIsStarted(false);
      props.setGameEnded(true);
      props.setTimeRemaining(30);
      
    }
  }, [props.timeRemaining, props.isStarted]);

  return (
    <>
      <p className="font-semibold tracking-wide font-mono text-2xl">
        {props.timeRemaining}
      </p>
    </>
  );
}

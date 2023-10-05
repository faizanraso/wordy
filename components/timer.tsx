import React from "react";

export default function Timer(props: { timeRemaining: number }) {
  return (
    <>
      <p className="font-semibold tracking-wide font-mono text-2xl">
        {props.timeRemaining}
      </p>
    </>
  );
}

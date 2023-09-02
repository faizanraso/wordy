import React from "react";

export default function WordList(props: { words: string[] }) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center pt-3">
        <div className="">
          <h1 className="font-semibold">Correct Words</h1>
        </div>
        <div className="pt-4 pb-3 space-y-1">
          {props.words
            ? props.words.map((word) => (
                <p className="text-sm font-medium" key={word}>
                  {word}
                </p>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

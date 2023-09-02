import React from "react";

export default function WordList(props: { words: string[] }) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center pt-3">
        <div className="">
          <h1 className="font-semibold">Correct Words</h1>
        </div>
        <div className="pt-4 pb-3 space-y-1">
          <ul>
            {props.words
              ? props.words.map((word) => (
                  <li
                    className="text-sm font-medium transform transition-transform duration-500"
                    key={word}
                  >
                    {word}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  );
}

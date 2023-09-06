import React from "react";

export default function WordList(props: { words: string[] }) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center py-3">
        <div className="">
          <h1 className="font-semibold">Correct Words</h1>
        </div>
        <div className="pt-3 space-y-1">
          {!props.words.length ? (
            <div className="">
              <p className="text-xs font-medium">
                Any correct words you guess will show up here!
              </p>
            </div>
          ) : null}
          <ul>
            {props.words
              ? props.words.map((word) => (
                  <li
                    className="text-sm font-medium transition-opacity ease-in duration-150 opacity-100"
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

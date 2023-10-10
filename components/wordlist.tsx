import React from "react";

import { toTitleCase } from "@/app/utils/title-case";

interface WordListProps {
  words: string[];
  gameEnded: boolean;
}

export default function WordList({ words, gameEnded }: WordListProps) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center py-3">
        <div className="">
          <h1 className="font-semibold">Synonyms</h1>
        </div>
        <div className="pt-3 space-y-1">
          {!words.length ? (
            <div className="">
              {!gameEnded ? (
                <p className="text-xs font-medium">
                  Any correct synonyms you guess will show up here
                </p>
              ) : null}
            </div>
          ) : null}
          <ul>
            {words
              ? words.map((word) => (
                  <li
                    className="text-sm font-medium transition-opacity ease-in duration-150 opacity-100"
                    key={word}
                  >
                    {toTitleCase(word)}
                  </li>
                ))
              : null}

            {gameEnded ? <p>diplay rmeaning words</p> : null}
          </ul>
        </div>
      </div>
    </section>
  );
}

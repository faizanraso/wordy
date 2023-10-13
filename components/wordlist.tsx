import React from "react";

import { toTitleCase } from "@/app/utils/title-case";

interface WordListProps {
  correctWordsData: {
    word: string;
    example: string;
    possibleAnswers: string[];
    userAnswer: string;
  }[];
  gameEnded: boolean;
}

export default function WordList({
  correctWordsData,
  gameEnded,
}: WordListProps) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center py-3">
        <div className="">
          <h1 className="font-semibold">Synonyms</h1>
        </div>
        <div className="pt-3 space-y-1">
          {!correctWordsData.length ? (
            <div className="">
              {!gameEnded ? (
                <p className="text-xs font-medium">
                  Any correct synonyms you guess will show up here
                </p>
              ) : null}
            </div>
          ) : null}
          <ul className="gap-y-1">
            {correctWordsData
              ? correctWordsData.map((wordData) => (
                  <li
                    className="text-sm font-medium transition-opacity ease-in duration-150 opacity-100"
                    key={wordData.word}
                  >
                    {toTitleCase(wordData.userAnswer)}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  );
}

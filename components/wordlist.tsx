import React from "react";

interface WordListProps {
  gameWordsData: {
    definition: string;
    possibleAnswers: string[];
    userAnswer: string;
  }[];
  gameEnded: boolean;
}

export default function WordList({
  gameWordsData,
  gameEnded,
}: WordListProps) {
  return (
    <section>
      <div className="w-[350px] bg-gray-100 rounded-md text-center py-3">
        <div className="">
          <h1 className="font-semibold">Correct Answers</h1>
        </div>
        <div className="pt-3 space-y-1">
          {!gameWordsData.length ? (
            <div className="">
              {!gameEnded ? (
                <p className="text-xs font-medium">
                  Any correct words you guess will show up here
                </p>
              ) : null}
            </div>
          ) : null}
          <ul className="gap-y-1">
            {gameWordsData
              ? gameWordsData.map((wordData) => (
                  <li
                    className="text-sm font-medium transition-opacity ease-in duration-150 opacity-100"
                    key={wordData.userAnswer}
                  >
                    {wordData.userAnswer}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  );
}

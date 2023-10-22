import { toTitleCase } from "@/app/utils/title-case";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Arrow } from "@radix-ui/react-popover";

interface GameEndAlertProps {
  open: boolean;
  setOpen: any;
  gameWordsData: {
    level_id: string;
    definition: string;
    possibleAnswers: string[];
    userAnswer: string;
    isCorrect: boolean;
  }[];
  setGameWordsData: any;
  timesArray: number[];
  setInputValue: (arg0: string) => void;
}

export default function GameEndAlert({
  open,
  setOpen,
  gameWordsData,
  setGameWordsData,
  setInputValue,
  timesArray,
}: GameEndAlertProps) {
  function resetGame() {
    setGameWordsData([]);
    setInputValue("");
  }

  const correctAnswers = gameWordsData.reduce(
    (total, x) => (x.isCorrect === true ? total + 1 : total),
    0
  );

  const avgResponseTime =
    timesArray.length > 1
      ? Math.round(
          (100 * timesArray.reduce((totalTime, x) => totalTime + x, 0)) /
            timesArray.length /
            1000
        ) / 100
      : 0;

  const questionsSkipped = gameWordsData.reduce(
    (total, x) => (!x.isCorrect ? total + 1 : total),
    0
  );

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center items-center pb-2">
            Results
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid grid-cols-1 divide-y-0">
              <div className="flex flex-row justify-between py-5 px-2 gap-x-7">
                <div
                  className={cn(
                    "flex flex-col justify-center items-center gap-y-3 w-1/3 text-center",
                    correctAnswers == 0 ? "text-red-700 " : "text-green-700"
                  )}
                >
                  <h1 className="font-semibold">Correct Answers</h1>
                  <p className="text-2xl font-semibold">{correctAnswers}</p>
                </div>
                <div
                  className={cn(
                    "flex flex-col justify-center items-center gap-y-3 w-1/3 text-center",
                    avgResponseTime < 5.5
                      ? "text-green-700 "
                      : avgResponseTime < 7.5
                      ? "text-yellow-600"
                      : "text-red-700"
                  )}
                >
                  <h1 className="font-semibold">Avg Time</h1>
                  <p className="text-2xl font-semibold">
                    {correctAnswers === 0 ? 0 : avgResponseTime}s
                  </p>
                </div>
                <div
                  className={cn(
                    "flex flex-col justify-center items-center gap-y-3 w-1/3 text-center",
                    questionsSkipped === 0
                      ? "text-green-700"
                      : questionsSkipped < 4
                      ? "text-yellow-600"
                      : "text-red-600"
                  )}
                >
                  <h1 className="font-semibold">Skipped Words</h1>
                  <p className="text-2xl font-semibold">{questionsSkipped}</p>
                </div>
              </div>
              <div className="py-4">
                {gameWordsData.length ? (
                  <section className="text-center justify-center gap-y-1 flex flex-row py-3">
                    {gameWordsData ? (
                      <>
                        <div className="w-1/2 text-black">
                          <h2 className="font-semibold py-1.5">
                            Correct Words
                          </h2>
                          <ul>
                            {gameWordsData.map((wordData) =>
                              wordData.isCorrect ? (
                                <li key={wordData.level_id}>
                                  <Popover key={wordData.userAnswer}>
                                    <PopoverTrigger asChild>
                                      <button className="font-medium text-green-700 p-0.5">
                                        {wordData.userAnswer}
                                      </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                      side="top"
                                      className="text-xs"
                                    >
                                      <Arrow className="fill-white" />
                                      <div>{wordData.definition}</div>
                                    </PopoverContent>
                                  </Popover>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </div>
                        <div className="w-1/2 text-black">
                          <h2 className="font-semibold py-1.5">
                            Skipped Words
                          </h2>
                          <ul>
                            {gameWordsData.map((wordData) =>
                              !wordData.isCorrect ? (
                                <li key={wordData.level_id}>
                                  <Popover key={wordData.possibleAnswers[0]}>
                                    <PopoverTrigger asChild>
                                      <button className="font-medium text-red-700 p-0.5">
                                        {" "}
                                        {wordData.possibleAnswers[0].length <=
                                          3 &&
                                        wordData.possibleAnswers.includes(
                                          wordData.possibleAnswers[0].toUpperCase()
                                        )
                                          ? wordData.possibleAnswers[0].toUpperCase()
                                          : toTitleCase(
                                              wordData.possibleAnswers[0]
                                            )}
                                      </button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                      side="top"
                                      className="text-xs"
                                    >
                                      <Arrow className="fill-white" />
                                      <div>{wordData.definition}</div>
                                    </PopoverContent>
                                  </Popover>
                                </li>
                              ) : null
                            )}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <div className="py-10 text-center items-center justify-center">
                        <p className="font-medium">
                          Looks like you didn't really play.
                        </p>
                      </div>
                    )}
                  </section>
                ) : (
                  <div className="py-10 text-center items-center justify-center">
                    <p className="font-medium">
                      Looks like you didn't really play.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-center justify-center">
          <AlertDialogAction onClick={resetGame}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

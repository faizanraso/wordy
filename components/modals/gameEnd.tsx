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

interface GameEndAlertProps {
  open: boolean;
  setOpen: any;
  gameWordsData: {
    definition: string;
    possibleAnswers: string[];
    userAnswer: string;
    isCorrect: boolean;
  }[];
  setGameWordsData: any;
  setInputValue: (arg0: string) => void;
}

export default function GameEndAlert({
  open,
  setOpen,
  gameWordsData,
  setGameWordsData,
  setInputValue,
}: GameEndAlertProps) {
  function resetGame() {
    setGameWordsData([]);
    setInputValue("");
  }

  const correctAnswers = gameWordsData.reduce(
    (total, x) => (x.isCorrect === true ? total + 1 : total),
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
            <div className="flex flex-row justify-between py-5 px-2">
              <div
                className={cn(
                  "flex flex-col font-semibold justify-center items-center gap-y-3",
                  correctAnswers == 0 ? "text-red-700 " : "text-green-700"
                )}
              >
                <h1 className="">Correct Answers</h1>
                <p className="text-2xl">{correctAnswers}</p>
              </div>
              <div className="">
                <h1>Avg Response Time</h1>
              </div>
              <div>
                <h1>Skipped Words</h1>
              </div>
            </div>

            {gameWordsData.length ? (
              <ul className="text-center items-center justify-center">
                {gameWordsData
                  ? gameWordsData.map((wordData) =>
                      wordData.isCorrect ? (
                        <li className="pt-0.5" key={wordData.userAnswer}>
                          <Popover>
                            <PopoverTrigger>
                              {" "}
                              <p className="font-medium text-green-700 ">
                                {wordData.userAnswer}
                              </p>
                            </PopoverTrigger>
                            <PopoverContent side="top">
                              <p className="text-xs">{wordData.definition}</p>
                            </PopoverContent>
                          </Popover>
                        </li>
                      ) : (
                        <li
                          className="pt-0.5"
                          key={wordData.possibleAnswers[0]}
                        >
                          <Popover>
                            <PopoverTrigger>
                              {" "}
                              <p className="font-medium text-red-700 ">
                                {wordData.possibleAnswers[0].length <= 3 &&
                                wordData.possibleAnswers.includes(
                                  wordData.possibleAnswers[0].toUpperCase()
                                )
                                  ? wordData.possibleAnswers[0].toUpperCase()
                                  : toTitleCase(wordData.possibleAnswers[0])}
                              </p>
                            </PopoverTrigger>
                            <PopoverContent side="top">
                              <p className="text-xs">{wordData.definition}</p>
                            </PopoverContent>
                          </Popover>
                        </li>
                      )
                    )
                  : null}
              </ul>
            ) : (
              <div></div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-center justify-center">
          <AlertDialogAction onClick={resetGame}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

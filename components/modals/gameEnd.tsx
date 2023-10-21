import { toTitleCase } from "@/app/utils/title-case";
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

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Results</AlertDialogTitle>
          <AlertDialogDescription>
            {gameWordsData.length ? (
              <ul className="text-center items-center justify-center">
                {gameWordsData
                  ? gameWordsData.map((wordData) =>
                      wordData.isCorrect ? (
                        <li className="pt-0.5" key={wordData.userAnswer}>
                          <Popover>
                            <PopoverTrigger>
                              {" "}
                              <p className="font-semibold text-green-700 ">
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
                              <p className="font-semibold text-red-700 ">
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
              <div>
                <p>No words correctly answered</p>
              </div>
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

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
              <ul>
                {gameWordsData
                  ? gameWordsData.map((wordData) =>
                      wordData.isCorrect ? (
                        <li
                          className="text-sm font-medium text-green-600"
                          key={wordData.userAnswer}
                        >
                          {wordData.userAnswer}
                        </li>
                      ) : (
                        <li
                          className="text-sm font-medium text-red-600"
                          key={wordData.possibleAnswers[0]}
                        >
                          {wordData.possibleAnswers[0].length <= 3 &&
                          wordData.possibleAnswers.includes(
                            wordData.possibleAnswers[0].toUpperCase()
                          )
                            ? wordData.possibleAnswers[0].toUpperCase()
                            : toTitleCase(wordData.possibleAnswers[0])}
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

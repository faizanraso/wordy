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
  correctWordsData: {
    word: string;
    example: string;
    possibleAnswers: string[];
    userAnswer: string;
  }[];
  setCorrectWordsData: any;
  setInputValue: (arg0: string) => void;
}

export default function GameEndAlert({
  open,
  setOpen,
  correctWordsData,
  setCorrectWordsData,
  setInputValue,
}: GameEndAlertProps) {
  function resetGame() {
    setCorrectWordsData([]);
    setInputValue("");
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Results</AlertDialogTitle>
          <AlertDialogDescription>
            <ul>
              {correctWordsData.map((wordData) => (
                <li
                  key={wordData.word}
                  className="text-green-700 font-medium tracking-wide"
                >
                  {wordData.userAnswer}
                </li>
              ))}
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-center justify-center">
          <AlertDialogAction onClick={resetGame}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

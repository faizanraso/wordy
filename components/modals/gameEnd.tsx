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
    definition: string;
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
            {correctWordsData.length ? (
              <ul>
                {correctWordsData.map((wordData) => (
                  <li
                    key={wordData.userAnswer}
                    className="text-green-700 font-medium tracking-wide"
                  >
                    {wordData.userAnswer}
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p>no words correctly answered</p>
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

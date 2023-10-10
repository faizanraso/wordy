import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface GameEndAlertProps {
  open: boolean;
  setOpen: any;
  wordList: string[];
  levelData: { answers: string[] };
  setUserWords: (arg0: never[]) => void;
}

export default function GameEndAlert({
  open,
  setOpen,
  wordList,
  levelData,
  setUserWords,
}: GameEndAlertProps) {
  function resetGame() {
    setUserWords([]);
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Results</AlertDialogTitle>
          <AlertDialogDescription>
            <ul>
              {wordList.map((word) => (
                <li
                  key={word}
                  className="text-green-700 font-medium tracking-wide"
                >
                  {word}
                </li>
              ))}
              {levelData?.answers.map((word: string) =>
                !wordList.includes(word.toLowerCase()) ? (
                  <p
                    key={word}
                    className="text-red-700 font-medium tracking-wide"
                  >
                    {word}
                  </p>
                ) : null
              )}
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

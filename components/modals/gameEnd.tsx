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
  userWords: string[];
  setUserWords: (arg0: never[]) => void;
  setInputValue: (arg0: string) => void;
}

export default function GameEndAlert({
  open,
  setOpen,
  userWords,
  setUserWords,
  setInputValue,
}: GameEndAlertProps) {
  function resetGame() {
    setUserWords([]);
    setInputValue("");
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Results</AlertDialogTitle>
          <AlertDialogDescription>
            <ul>
              {userWords.map((word) => (
                <li
                  key={word}
                  className="text-green-700 font-medium tracking-wide"
                >
                  {word}
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

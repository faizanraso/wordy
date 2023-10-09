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

export default function GameEndAlert(props: {
  open: boolean;
  setOpen: any;
  wordList: string[];
  levelData: { answers: string[] };
  setUserWords: (arg0: never[]) => void;
}) {
  function resetGame() {
    props.setUserWords([]);
  }

  return (
    <AlertDialog open={props.open} onOpenChange={props.setOpen}>
      <AlertDialogContent className="items-center">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center mx-auto pb-3">
            Results
          </AlertDialogTitle>
          <AlertDialogDescription className="">
            <ul>
              {props.wordList.map((word) => (
                <li
                  key={word}
                  className="text-green-700 font-medium tracking-wide"
                >
                  {word}
                </li>
              ))}
              {props.levelData?.answers.map((word: string) =>
                !props.wordList.includes(word.toLowerCase()) ? (
                  <p key={word} className="text-red-700 font-medium tracking-wide">
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

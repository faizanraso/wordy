import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

export default function Info() {
  return (
    <Dialog>
      <DialogTrigger>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={32}
          height={32}
          className="hover:bg-gray-200 rounded-md transition duration-100 p-1"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to Play</DialogTitle>
          <DialogDescription>
            Welcome to Wordy! Your mission? Guess as many of the 15 words
            related to the topic as you can, within the time limit. Your score
            depends on accurate guesses and your speed.
          </DialogDescription>
          <DialogDescription>
            Keep in mind there may be more words that you can associate with the
            topic, but may not be one of the answers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

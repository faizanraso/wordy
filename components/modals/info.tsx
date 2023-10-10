import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Info() {
  return (
    <Dialog>
      <DialogTrigger>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width={32}
          height={32}
          className="hover:bg-gray-200 rounded-md transition duration-150 p-1"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How to Play</DialogTitle>
          <DialogDescription>
            Welcome to Wordy! Your challenge is to test your vocabulary within a
            limited time. You'll be presented with words, and your mission is to
            find a <span className="font-bold">synonym</span> for each word as
            quickly as possible. Get it right, and you'll move on to the next
            word (or you can skip it).
            <br></br>
            <br></br>
            <span className="font-bold">Here's how it works:</span>
            {"\n"}
            <ul className="list-outside py-1">
              <li>- You have a set time limit (30 sec) per game.</li>
              <li>
                - For each word, try to guess as a synonym for it, and you'll
                move on.
              </li>
              <li>- You can skip a word if you're unsure or stuck.</li>
            </ul>
            <br></br>
            Are you ready to put your vocabulary to the test? Let's get started!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

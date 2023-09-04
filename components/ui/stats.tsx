import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";

export default function Stats() {
  return (
    <Dialog>
      <DialogTrigger>
        <svg
          width={32}
          height={32}
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
          className="hover:bg-gray-200 rounded-md transition duration-100 p-1"
        >
          <path
            d="M15 19H9V8.6a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6V19zM15 5H9M20.4 19H15v-3.9a.6.6 0 01.6-.6h4.8a.6.6 0 01.6.6v3.3a.6.6 0 01-.6.6zM9 19v-5.9a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6v5.3a.6.6 0 00.6.6H9z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

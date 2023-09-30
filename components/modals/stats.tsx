"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";

export default function Stats() {
  const { data: session, status } = useSession();

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
          className="hover:bg-gray-200 rounded-md transition duration-150 p-1"
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
          <DialogTitle>Leaderboard</DialogTitle>
          {status !== "authenticated" ? (
            <DialogDescription>
              You must login to view the leaderboard
            </DialogDescription>
          ) : (
            <DialogDescription>Logged In</DialogDescription>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

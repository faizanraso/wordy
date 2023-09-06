"use client";

import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Icons } from "../icons/icons";

export default function Profile() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  console.log(status);

  function loginWithGithub() {
    setIsLoading(true);
    signIn("github", { callbackUrl: window.location.origin });
    setIsLoading(false);
  }

  async function loginWithGoogle() {
    setIsLoading(true);
    signIn("google", { callbackUrl: window.location.origin });
    setIsLoading(false);
  }

  if (status !== "authenticated") {
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
              d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Access Your Profile</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-y-4 items-center justify-center py-5">
                <Button
                  className="font-medium p-5"
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                  onClick={() => loginWithGoogle()}
                >
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.google className="mr-2 h-4 w-4" />
                  )}{" "}
                  Continue With Google
                </Button>
                <Button
                  className="font-medium p-5"
                  variant="outline"
                  type="button"
                  disabled={isLoading}
                  onClick={() => loginWithGithub()}
                >
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Icons.gitHub className="mr-2 h-4 w-4" />
                  )}{" "}
                  Continue With Github
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

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
            d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User&apos;s name here</DialogTitle>
          <DialogDescription>Logged In</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

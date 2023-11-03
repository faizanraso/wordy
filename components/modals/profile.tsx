"use client";

import React, { useEffect, useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { fetcher } from "@/app/utils/fetcher";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { Icons } from "../icons/icons";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface UserData {
  userGamesPlayed: number;
  userHighScore: number;
  userAvgScore: number;
  userResponseTime: number;
}

export default function Profile() {
  const { data: session, status } = useSession();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [userStats, setUserStats] = useState<UserData>();
  const { data, isLoading, error } = useSWR("/api/getUserStats", fetcher);

  useEffect(() => {
    if (data) {
      setUserStats({
        userGamesPlayed: data.userGamesPlayed,
        userHighScore: data.userHighScore,
        userAvgScore: data.userAvgScore,
        userResponseTime: data.userResponseTime,
      });
    }
  }, [data]);

  function loginWithGithub() {
    setIsSigningIn(true);
    signIn("github", { callbackUrl: window.location.origin });
    setIsSigningIn(false);
  }

  async function loginWithGoogle() {
    setIsSigningIn(true);
    signIn("google", { callbackUrl: window.location.origin });
    setIsSigningIn(false);
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
            className="hover:bg-gray-200 rounded-md transition duration-150 p-1"
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
                  disabled={isSigningIn}
                  onClick={() => loginWithGoogle()}
                >
                  {isSigningIn ? (
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
                  disabled={isSigningIn}
                  onClick={() => loginWithGithub()}
                >
                  {isSigningIn ? (
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
          className="hover:bg-gray-200 rounded-md transition duration-150 p-1"
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
          <DialogTitle className="px-4 pt-2">{session.user?.name}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center py-3 gap-y-5">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Total Games Played
                    </TableCell>
                    <TableCell className="font-medium text-right px-3">
                      {userStats?.userGamesPlayed}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">High Score</TableCell>
                    <TableCell className="font-medium text-right px-3">
                      {userStats?.userHighScore}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Average Score</TableCell>
                    <TableCell className="font-medium text-right px-3">
                      {userStats?.userAvgScore}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Average Response Time
                    </TableCell>
                    <TableCell className="font-medium text-right px-3">
                      {userStats?.userResponseTime}s
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                className="bg-red-500 hover:bg-red-600 transition duration-150 text-white"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

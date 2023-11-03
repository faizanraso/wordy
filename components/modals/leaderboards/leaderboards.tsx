"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <DialogTitle>Leaderboards</DialogTitle>
          <DialogDescription className="flex items-center justify-center mx-autos">
            <Tabs
              defaultValue="highest-score"
              className="justify-center items-center mx-auto flex flex-col py-4"
            >
              <TabsList>
                <TabsTrigger value="highest-score" className="text-[0.6rem]">
                  Highest Score
                </TabsTrigger>
                <TabsTrigger value="avg-score" className="text-[0.6rem]">
                  Avg Score
                </TabsTrigger>
                <TabsTrigger
                  value="avg-response-time"
                  className="text-[0.6rem]"
                >
                  Avg Response Time
                </TabsTrigger>
              </TabsList>
              <TabsContent value="highest-score">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="avg-score">
                Change your password here.
              </TabsContent>
              <TabsContent value="avg-response-time">
                Change your password here.
              </TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

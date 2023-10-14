import React from "react";
import Link from "next/link";

import Info from "../modals/info";
import Stats from "../modals/stats";
import Profile from "../modals/profile";
import "@/public/logo.png";

export default function Header() {
  return (
    <header className="bg-transparent px-2 py-1 border-b border-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black object-cover text-center transition duration-150 ">
              <span className="text-xl font-mono font-semibold text-white">
                W
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Info />
              <Stats />
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

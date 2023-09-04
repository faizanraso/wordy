import React from "react";
import Link from "next/link";

import "@/public/logo.png";
import { Dialog } from "../ui/shadcn/dialog";
import Profile from "../ui/profile";

export default function Header() {
  return (
    <header className="bg-transparent px-2 py-1 border-b border-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black object-cover text-center transition duration-100 ">
              <span className="text-xl font-mono font-semibold text-white">
                W
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Link href={"/"}>
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
              </Link>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

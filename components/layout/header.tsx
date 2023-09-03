import React from "react";
import Link from "next/link";

import "@/public/logo.png";
import { Dialog } from "../ui/shadcn/dialog";

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
              <Dialog />
              <Link href={"/"}>
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
              </Link>
              <Link href={"/"}>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

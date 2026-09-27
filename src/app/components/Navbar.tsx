"use client";

import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { libraryContext } from "@/context/libraryContext";


const Navbar = () => {
  const pathname = usePathname();

  const { addToTodaysPlan, saveForLater } =
    useContext(libraryContext);

  return (
    <nav className="bg-[#0d0d0f] border-b border-[#242426]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lime-400 text-xl">⚡</span>

          <span className="text-white font-bold">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          {/* Workouts */}
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-xs font-medium ${
              pathname === "/"
                ? "bg-lime-400 text-black"
                : "text-gray-400"
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/myPlan"
            className={`px-4 py-2 rounded-full text-xs font-medium ${
              pathname === "/myPlan"
                ? "bg-lime-400 text-black"
                : "text-gray-400"
            }`}
          >
            My Plan
          </Link>

        </div>

        {/* Status Badges */}
        <div className="flex items-center gap-5 text-xs text-gray-400">

          {/* Plan */}
          <div className="flex items-center gap-2">
            <span>Plan</span>

            <span className="bg-lime-400 text-black min-w-5 h-5 px-1 rounded-full flex items-center justify-center text-[10px] font-semibold">
              {addToTodaysPlan.length}
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2">
            <span>Saved</span>

            <span className="border border-gray-600 text-gray-300 min-w-5 h-5 px-1 rounded-full flex items-center justify-center text-[10px]">
              {saveForLater.length}
            </span>
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
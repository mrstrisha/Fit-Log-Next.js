"use client";

import { useState } from "react";
import LibraryCard from "../components/library/LibraryCard";
import { Library as LibraryType } from "@/context/libraryContext";

const WorkoutList = ({ libraries }: { libraries: LibraryType[] }) => {
  const [sortBy, setSortBy] = useState("duration");

  const sortedLibraries = [...libraries].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div>
      <div>

    {/* Sort By */}
    <div className="flex justify-end mb-5">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-[#111216] text-white border border-[#303136] rounded-lg px-4 py-2 text-sm outline-none"
      >
        <option value="duration">Sort By: Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-3 gap-5">
      {sortedLibraries.map((library) => (
        <LibraryCard
          key={library.id}
          library={library}
        />
      ))}
    </div>

  </div>
   
    </div>
  );
};

export default WorkoutList;
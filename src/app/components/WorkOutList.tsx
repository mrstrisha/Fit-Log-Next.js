"use client";

import { useState } from "react";
import LibraryCard from "../components/library/LibraryCard";

const WorkoutList = ({ libraries }) => {
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
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-700 rounded-lg px-4 py-2"
      >
        <option value="duration">Sort By: Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {sortedLibraries.map((library) => (
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
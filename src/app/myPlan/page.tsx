"use client";

import { useContext } from "react";



import { libraryContext } from "@/context/libraryContext";
import LibraryCard from "../components/library/LibraryCard";
import OneColumnCard from "../components/library/OneColumnCard";
import WorkoutList from "../components/WorkOutList";

const MyPlan = () => {
  const { addToTodaysPlan, saveForLater } = useContext(libraryContext);

 const exerciseCount = addToTodaysPlan.length;

const totalMinutes = addToTodaysPlan.reduce(
  (total, item) => total + item.duration,
  0
);

const totalCalories = addToTodaysPlan.reduce(
  (total, item) => total + item.caloriesBurned,
  0
);

  return (
    <div>

             <div className="my-6">
  <p className="text-3xl font-bold">The Library</p>
  <p className="mt-2">Twelve lifts covering every major muscle group.</p>
</div>

    <div className="grid grid-cols-3 border border-[#242426] bg-[#111216]">

  {/* Exercises */}
  <div className="p-5 border-r border-[#242426]">
    <p className="text-[10px] text-gray-500 uppercase">
      Exercises
    </p>

    <h2 className="text-2xl font-bold text-lime-400 mt-1">
      {exerciseCount}
    </h2>
  </div>

  {/* Minutes */}
  <div className="p-5 border-r border-[#242426]">
    <p className="text-[10px] text-gray-500 uppercase">
      Minutes
    </p>

    <h2 className="text-2xl font-bold text-white mt-1">
      {totalMinutes}
    </h2>
  </div>

  {/* Calories */}
  <div className="p-5">
    <p className="text-[10px] text-gray-500 uppercase">
      Calories
    </p>

    <h2 className="text-2xl font-bold text-white mt-1">
      {totalCalories}
    </h2>
  </div>

</div>


<WorkoutList libraries={addToTodaysPlan} />






    <div className="tabs tabs-border">
        
        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {addToTodaysPlan.map((addPlan) => (
            <OneColumnCard
              key={addPlan.id}
              library={addPlan}
            />
          ))}
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {saveForLater.map((savedPlan) => (
     <OneColumnCard
    key={savedPlan.id}
    library={savedPlan}
  />
))}
        </div>

      </div>
      </div>
   
  );
};

export default MyPlan;
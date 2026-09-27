"use client";

import { useContext } from "react";


import { libraryContext } from "@/context/libraryContext";
import LibraryCard from "../components/library/LibraryCard";
import OneColumnCard from "../components/library/OneColumnCard";

const MyPlan = () => {
  const { addToTodaysPlan, saveForLater } = useContext(libraryContext);

  console.log(addToTodaysPlan, saveForLater);

  return (
    <div>
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
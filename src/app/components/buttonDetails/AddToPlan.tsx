"use client";

import { libraryContext } from "@/context/libraryContext";
import { useContext } from "react";


const AddToPlan = ({ LibraryDetail }) => {
  const { addToTodaysPlan, setAddToTodaysPlan } =useContext(libraryContext);

  const handleAddToTodaysPlan = () => {
    setAddToTodaysPlan([
      ...addToTodaysPlan,
      LibraryDetail,
    ]);

    alert(`You have added "${LibraryDetail.libraryName}" to today's plan`);
  };

  return (
    <div>
      <button
        className="bg-lime-400 text-black px-4 py-2 text-sm font-medium"
        onClick={handleAddToTodaysPlan}
      >
        Add to today's plan
      </button>
    </div>
  );
};

export default AddToPlan;
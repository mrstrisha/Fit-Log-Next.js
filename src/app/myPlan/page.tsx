"use client";

import { libraryContext } from "@/context/libraryContext";
import { useContext } from "react";


const MyPlan = () => {
  const { addToTodaysPlan } = useContext(libraryContext);

  console.log(addToTodaysPlan);

  return (
    <div>
      my plan is ghorar dim
    </div>
  );
};

export default MyPlan;
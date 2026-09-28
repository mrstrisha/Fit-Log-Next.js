"use client";

import { createContext, ReactNode, useState } from "react";

export interface Library {
  id: string;
  libraryName: string;
  image: string;
  description: string;
  muscleGroups: string[];
  equipment: string[];
  difficulty: string;
  sets: number;
  reps: number;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions: string[];
}

interface LibraryContextType {
  addToTodaysPlan: Library[];
  setAddToTodaysPlan: React.Dispatch<React.SetStateAction<Library[]>>;
  saveForLater: Library[];
  setSaveForLater: React.Dispatch<React.SetStateAction<Library[]>>;
}

export const libraryContext = createContext<LibraryContextType>({
  addToTodaysPlan: [],
  setAddToTodaysPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
});

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [addToTodaysPlan, setAddToTodaysPlan] = useState<Library[]>([]);
  const [saveForLater, setSaveForLater] = useState<Library[]>([]);

  const sharedData = {
    addToTodaysPlan,
    setAddToTodaysPlan,
    saveForLater,
    setSaveForLater,
  };

  return (
    <libraryContext.Provider value={sharedData}>
      {children}
    </libraryContext.Provider>
  );
};

export default LibraryProvider;
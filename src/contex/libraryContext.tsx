'use client'

import { createContext, ReactNode, useState } from "react";


const libraryContext = createContext({});

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [addToTodaysPlan, setAddToTodaysPlan] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

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
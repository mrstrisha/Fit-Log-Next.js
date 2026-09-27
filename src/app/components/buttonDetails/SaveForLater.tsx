"use client";

import { libraryContext } from "@/context/libraryContext";
import { useContext } from "react";
import { toast } from "react-toastify";


const SaveForLater = ({ LibraryDetail }) => {
  const { saveForLater, setSaveForLater } = useContext(libraryContext);

  const handleSaveForLater = () => {
    setSaveForLater([
      ...saveForLater,
      LibraryDetail,
    ]);

   toast.success(`"${Library.libraryName}" saved for later`);
  };

  return (
    <button
      className="bg-lime-400 text-black px-4 py-2 text-sm font-medium"
      onClick={handleSaveForLater}
    >
      Save for later
    </button>
  );
};

export default SaveForLater;
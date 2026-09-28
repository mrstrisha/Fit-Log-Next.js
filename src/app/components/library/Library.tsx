import LibraryCard from "./LibraryCard";
import { Library as LibraryType } from "@/context/libraryContext";

const getLibrary = async () => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );
  const data = await response.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();

  return (
    <div className="container mx-auto">
      <div className="my-6">
        <p className="text-3xl font-bold">The Library</p>
        <p className="mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 container mx-auto">
        {libraryData.map((library: LibraryType) => (
          <LibraryCard
            key={library.id}
            library={library}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
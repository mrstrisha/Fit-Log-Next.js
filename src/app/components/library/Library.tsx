import LibraryCard from "./LibraryCard";

const getLibrary = async () =>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data;
}
const Library = async () => {
    const libraryData= await getLibrary();
    
    return (
        <div>
            The Library
            <div className="grid grid-cols-3 gap-6 container mx-auto">
             {
        libraryData.map((library) => (
         <LibraryCard key={library.id} library={library}></LibraryCard>
        ))
      }
      </div>
        </div>
    );
};

export default Library;
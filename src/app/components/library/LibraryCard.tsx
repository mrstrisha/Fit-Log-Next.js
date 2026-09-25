import Image from "next/image";
import Link from "next/link";



    const LibraryCard = ({ library }) => {
  return (
    <Link href={`/libraryDetail/${library.id}`}>
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] text-white ">
      
      {/* Image */}
      <Image
        src={library.image}
        alt={library.title}
        width={800}
        height={600}
        className="h-44 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">

        {/* Tags */}
        <div className="mb-3 flex gap-2">
          <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
            {library.muscleGroups}
          </span>

          <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
            {library.muscleGroups}
          </span>
        </div>

       
        <h2 className="text-lg font-bold uppercase">
          {library.equipment}
        </h2>

    
        <p className="mt-1 text-sm text-gray-400">
          {library.description}
        </p>



        {/* Divider */}
        <div className="my-4 border-t border-gray-800"></div>

        {/* Info */}
        <div className="flex gap-4 text-xs text-gray-400">
          <span>◷ {library.duration} min</span>
          <span>🔥 {library.calories} kcal</span>
          <span>☆ {library.rating}</span>
        </div>

      </div>
    </div>
    // </Link>
  );
};




export default LibraryCard;
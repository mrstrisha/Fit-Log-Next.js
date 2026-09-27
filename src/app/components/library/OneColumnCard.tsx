

import Image from "next/image";

const OneColumnCard = ({ library }) => {
  return (
    <div className="w-full border border-gray-800 rounded-xl p-4 flex gap-4 bg-[#111113]">
      
      {/* Image */}
<Image
  src={library.image}
  alt={library.name}
  className="object-cover rounded-lg"
  height={400}
  width={400}
/>
      

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-white text-lg font-semibold">
          {library.name}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {library.equipment}
        </p>

        <div className="flex gap-4 mt-3 text-xs text-gray-400">
          <span>{library.duration} min</span>
          <span>{library.caloriesBurned} kcal</span>
          <span>{library.difficulty}</span>
        </div>
      </div>

    </div>
  );
};

export default OneColumnCard;
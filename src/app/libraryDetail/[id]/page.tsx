import Image from "next/image";



interface ILibraryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async (id: string) => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await response.json();

  return data;
};

const LibraryDetail = async ({ params }: ILibraryDetailsPageProps) => {
  const { id } = await params;

  const library = await getLibrary(id);

  return (
    <div className="min-h-screen bg-[#080b10] flex items-center justify-center p-5">

      <div className="w-full max-w-6xl border border-cyan-400 p-3">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  p-4">

        
          <div>
         <Image
  src={library.image}
  alt={library.name}
  width={500}
  height={500}
  className="object-cover"
/>
          </div>


          {/* ================= DETAILS ================= */}
          <div className="text-white flex flex-col justify-between">

            <div>

              {/* Name + Rating */}
              <div className="flex justify-between items-start gap-3">

                <div>
                  <h1 className="text-2xl font-bold uppercase">
                    {library.name}
                  </h1>

                  <p className="text-gray-400 text-sm mt-2">
                    {library.description}
                  </p>
                </div>

                <div className="border border-gray-700 px-3 py-2">
                  ⭐ {library.rating}
                </div>

              </div>


              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2 mt-4">

                {library.muscleGroups.map(
                  (muscle: string, index: number) => (
                    <span
                      key={index}
                      className="bg-lime-400 text-black text-xs px-3 py-1 rounded-full"
                    >
                      {muscle}
                    </span>
                  )
                )}

              </div>


              {/* Exercise Information */}
              <div className="mt-5 border border-gray-700">

                <div className="flex justify-between p-3 border-b border-gray-700">
                  <span className="text-xs text-gray-500">
                    EQUIPMENT
                  </span>

                  <span className="text-sm">
                    {library.equipment}
                  </span>
                </div>


                <div className="flex justify-between p-3 border-b border-gray-700">
                  <span className="text-xs text-gray-500">
                    DIFFICULTY
                  </span>

                  <span className="text-sm">
                    {library.difficulty}
                  </span>
                </div>


                <div className="flex justify-between p-3 border-b border-gray-700">
                  <span className="text-xs text-gray-500">
                    SETS
                  </span>

                  <span className="text-sm">
                    {library.sets}
                  </span>
                </div>


                <div className="flex justify-between p-3 border-b border-gray-700">
                  <span className="text-xs text-gray-500">
                    REPS
                  </span>

                  <span className="text-sm">
                    {library.reps}
                  </span>
                </div>


                <div className="flex justify-between p-3 border-b border-gray-700">
                  <span className="text-xs text-gray-500">
                    DURATION
                  </span>

                  <span className="text-sm">
                    {library.duration} min
                  </span>
                </div>


                <div className="flex justify-between p-3">
                  <span className="text-xs text-gray-500">
                    CALORIES
                  </span>

                  <span className="text-sm">
                    {library.caloriesBurned} kcal
                  </span>
                </div>

              </div>


              {/* ================= INSTRUCTIONS ================= */}

              <div className="mt-5">

                <h2 className="font-bold text-sm uppercase mb-3">
                  Instructions
                </h2>

                <div className="space-y-2">

                  {library.instructions.map(
                    (instruction: string, index: number) => (
                      <p
                        key={index}
                        className="text-sm text-gray-400"
                      >
                        {index + 1}. {instruction}
                      </p>
                    )
                  )}

                </div>

              </div>

            </div>


            {/* ================= BUTTONS ================= */}

            <div className="flex gap-3 mt-6">

              <button className="bg-lime-400 text-black px-4 py-2 text-sm font-medium">
                Add to today's plan
              </button>

              <button className="border border-gray-600 px-4 py-2 text-sm text-gray-300">
                Save for later
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LibraryDetail;
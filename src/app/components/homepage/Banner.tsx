import Image from "next/image";


const HeroBanner = () => {
  return (
    <section className="w-full bg-[#12151b] border border-[#242932] rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-10 md:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

          {/* Left Content */}
          <div>
            <p className="text-[10px] font-bold tracking-widest text-lime-400 uppercase mb-3">
              Workout Library
            </p>

            <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] text-white">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="text-xs md:text-sm text-gray-400 max-w-md mt-5 leading-relaxed">
              FitLog is a dark, no-nonsense gym companion.
              Pick a workout, log your sets, and track your progress.
            </p>

            <button className="mt-6 bg-lime-400 hover:bg-lime-300 text-black text-xs font-bold px-5 py-3 rounded-md">
              BROWSE WORKOUTS
            </button>
          </div>


          {/* Right Image */}
          <div className="flex justify-center md:justify-end">

<Image
    src="/banner.png"
  alt="Fitness Banner"
  width={1200}
  height={400}
  className="w-full object-cover"
/>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
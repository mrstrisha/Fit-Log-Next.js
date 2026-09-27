
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#0d0d0f] border-b border-[#242426]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lime-400 text-xl">⚡</span>
          <span className="text-white font-bold">FITLOG</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="bg-lime-400 text-black px-4 py-1.5 rounded-full text-xs font-medium"
          >
            Workouts
          </Link>

          <Link
            href="/myPlan"
            className="text-gray-400 text-xs px-3 py-1.5"
          >
            My Plan
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-5 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>Plan</span>
            <span className="bg-lime-400 text-black w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Saved</span>
            <span className="border border-gray-700 w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
              0
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
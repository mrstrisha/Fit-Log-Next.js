import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0f] border-t border-[#242426]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <span className="text-lime-400 text-sm">✚</span> */}
         <Image
  src="/logo.png"
  alt="Fitness banner"
  width={32}
  height={32}
/>
          <span className="text-white text-xs font-bold">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-[10px]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;